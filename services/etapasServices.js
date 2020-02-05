/* 
  Acessa os modelos e retorna os dados para o controlador
*/
const Etapa = require('../models/ListadeEtapas');

module.exports = {

  // Retorna todas as etapas cadastradas no banco de dados
  async index() {
    const etapas = await Etapa.find();

    return etapas;
  },

  // Retorna uma etapa específica pelo id
  async show(id) {
    const etapa = await Etapa.findById(id);

    return etapa;
  },

  // Executa a rotina de criação de uma nova etapa no banco
  async store(titulo, descricao, concluido, detalhes) {

    const etapaExists = await Etapa.findOne({ descricao });

    if (etapaExists) {
      return null;
    }

    const etapa = await Etapa.create({
      titulo,
      descricao,
      concluido,
      detalhes,
    });

    return etapa;
  },

  // Alteração de uma etapa no banco  
  async update(id, body) {
    const etapa = await Etapa.findById(id);

    if (!etapa) {
      return null;
    }

    if(body.titulo) {
      etapa.titulo = body.titulo;
    }

    if(body.descricao) {
      etapa.descricao = body.descricao;
    }

    if(body.concluido) {
      etapa.concluido = body.concluido;
    }

    if(body.detalhes) {
      etapa.detalhes = body.detalhes;
    }
    
   await etapa.save();

    return etapa;
  },

  // Apagar o resgistro de uma etapa
  async delete(id) {
    const etapa = await Etapa.findById(id);

    if (!etapa) {
      return null;
    }

    const deletedEtapa = etapa.delete();

    return deletedEtapa;
  },
};
