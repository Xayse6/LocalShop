    import { error } from "console";
    import express, { response } from "express";
    import admin from "firebase-admin";
    import {readFileSync} from "fs";
    import { request } from "http";


    const app = express();
    const PORT = 3000;

    app.use (express.json());

    // Carrega as credenciais do arquivos json de forma segura
    const serviceAccount = JSON.parse(
        readFileSync(new URL ("../firebase-key.json", import.meta.url), "utf-8")
    );

    //Inicializa o firebase admin json
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });

    // Atalho para a instancia do banco de dados firebase
    const db = admin.firestore();

    app.post("/lojas", async (request, response) => {
        try{
            const {nome, categoria, imagem, distancia, descricao} = request.body;
            if(!nome || !categoria || !imagem || !distancia){
                    return response.status(400).json({error: "Campos obrigatorios ausentes"});
            }
            const novaLoja={
                nome,
                categoria,
                imagem: imagem || "https://marketing4ecommerce.cl/wp-content/uploads/2019/09/imagen-vectorial-compressor.jpg",
                distancia,
                descricao: descricao || "",
                
            };
            //Salva no firestore dentro da coleção "lojas"
            const docRef = await db.collection("lojas").add(novaLoja);
            //Retorna o objeto criado junto com o ID gerado
            return response.status(201).json({
                id: docRef.id,
                ...novaLoja,
            });
            }catch(error){
                return response.status(500).json({
                    error:"Erro ao salvar a loja no banco."
                });
            }
    });

    app.listen(PORT, ()=>{
        console.log(`Servidor rodando na porta ${PORT}`);
    })

    app.get("/lojas", async(request,response)=>{
        try{
            const lojasRef=db.collection("lojas");
            const snapshot=await lojasRef.get();

            const listarLojas: any[] = [];

            snapshot.forEach(doc=>{
                listarLojas.push({
                    id:doc.id,
                    ...doc.data()
                });
            });
            return response.json(listarLojas);
        }catch(error){
            return response.status(500).json({error:"Erro ao buscar lojas no banco"});
        }
    })

    app.put("/lojas/:id", async(request, response)=>{
        try{
            const {id} = request.params;
            const{nome, categoria, distancia, imagem, descricao} = request.body;

            const docRef= db.collection("lojas").doc(id)
            const doc= await docRef.get();

            if(!doc.exists){
                return response.status(404).json({error:"Loja nao encontrada para atualizar."});
            }

            const dadosAtualizados:any={};
            if(nome) dadosAtualizados.nome=nome;
            if(categoria) dadosAtualizados.categoria=categoria;
            if(distancia) dadosAtualizados.distancia=distancia;
            if (imagem !== undefined) dadosAtualizados.imagem = imagem;
            if (descricao !== undefined) dadosAtualizados.descricao = descricao;

            await docRef.update(dadosAtualizados);

            return response.json({
                id,
                message: 'A loja "${nome || doc.data()?.nome}" Foi atualizada com sucesso!',
                ...dadosAtualizados
            });
        }catch(error){
            return response.status(500).json({error:"Erro ao tentar atulizada a loja"});
        }
    });

    app.delete("/lojas/:id", async (request, response)=>{
        try{
            const {id} = request.params;

            const docRef=db.collection("lojas").doc(id);
            const doc = await docRef.get();

            if(!doc.exists){
                return response.status(404).json({error: "LOja nao ncontrada para exclusao"})
            }
            const dadosDaLoja=doc.data();
            const nomeDaLoja=dadosDaLoja?.nome || "loja Sem Nome";

            await docRef.delete();

            return response.json({message: 'A loja "${nomeDaLoja}"foi deletada com sucesso!'});
        }catch (error){
            return response.status(500).json({error:"Erro ao tenta deletar a loja."});
        }
    });