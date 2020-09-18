var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];
for (var value of usuarios) {
    console.log(`O ${value.nome} possui as habilidades: ${value.habilidades.join(', ')}`)
}
