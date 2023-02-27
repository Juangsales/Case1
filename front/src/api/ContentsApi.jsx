// Servidor


const ContentsApi = () => {
  const url = 'http://localhost:3000'

  return {
      getContents () {
          return fetch(`${url}/conteudo`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          })
      },
      deleteContent (contentId) {
        return fetch(`${url}/conteudo/${contentId}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          }
       })
      },
      createContent (nome, lote, validade) {
        return fetch(`${url}/conteudo`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              nome: nome,
              lote: lote,
              validade: validade
            }
          )
       })
      },
      updateContent(contentId, nome, lote, validade) {
        return fetch(`${url}/conteudo/${contentId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              nome: nome,
              lote: lote,
              validade: validade
            }
          )
       })
      },
  }
}

export default ContentsApi