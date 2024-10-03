export default function (plop) {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Criar um componente',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual é o nome do seu componente?'
      }
    ],
    actions: []
  })
}
