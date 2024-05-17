import { Schema, model } from "mongoose"

const usuarioSchema = new Schema({
    // _id: Number,
    nome: String,
    senha: String
    // cursos: String
})

export default model("usuario", usuarioSchema)