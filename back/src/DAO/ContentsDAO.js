import db from '../infra/db.js'

class ContentsDAO {
    static listar() {
        const query = 'SELECT * FROM conteudos';
        return new Promise((resolve, reject) => {
            db.all(query, (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows)
            });
        });
    }

    static inserir(conteudo) {
        const query = 'INSERT INTO conteudos (nome, lote, validade) VALUES (?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.run(query, [conteudo.nome, conteudo.lote, conteudo.validade], function (err) {
                if (err) {
                    reject({
                        mensagem: 'Erro ao inserir o conteúdo',
                        erro: err
                    })
                }

                resolve({
                    mensagem: 'Conteúdo criado com sucesso',
                    contentId: this.lastID
                 })
            });
        });
    }

    static deletar(id) {
      const query = 'DELETE FROM conteudos WHERE id = ?';
      return new Promise((resolve, reject) => {
          db.run(query, [id], (err) => {
              if (err) {
                  reject({
                      mensagem: 'Erro ao deletar o conteúdo',
                      erro: err
                  })
              }

              resolve({ mensagem: 'Conteúdo deletado com sucesso' })
          });
      });
    }

    static atualizar(id, conteudo) {
      const query = 'UPDATE conteudos SET nome = ?, lote = ?, validade = ? WHERE id = ?';
      return new Promise((resolve, reject) => {
          db.run(query, [conteudo.nome, conteudo.lote, conteudo.validade, id], (err) => {
              if (err) {
                  reject({
                      mensagem: 'Erro ao atualizar o conteúdo',
                      erro: err
                  })
              }

              resolve({ mensagem: 'Conteúdo atualizado com sucesso' })
          });
      });
    }
}

export default ContentsDAO;