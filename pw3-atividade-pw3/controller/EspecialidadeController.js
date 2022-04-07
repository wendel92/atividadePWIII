const express = require('express');

const especialidade = require('../model/Especialidade');

/** CONFIGURAÇÃO DAS ROTAS **/
const router = express.Router();

/** DEFINIÇÃO DAS ROTAS **/

/* ROTA DE INSERÇÃO DE ESPECIALIDADE (VERBO HTTP: POST) */
/*
Métodos do verbo da rota:
1º - A rota em si
2º - A ação que a rota deve executar (arrow function)
*/
router.post(
    '/especialidade/cadastrarEspecialidade',
    (req, res)=>{
       
        //let  nome_especialidade  = req.body.nome_especialidade;
        let { nome_especialidade } = req.body;

        especialidade.create(
            { nome_especialidade }
            //{nome_especialidade: nome_especialidade}
        ).then(
            ()=>{
                res.send('DADOS DE ESPECIALIDADE INSERIDOS COM SUCESSO!');
            }
        );
        //console.log(nome_especiaidade);
        //console.log(req.body);
        //res.send('ROTA DE INSERÇÃO DE ESPECIALIDADE');
    }
);
/* ROTA DE LISTAGEM GERAL DE ESPECIALIDADE (VERBO HTTP: GET)*/
router.get(
    '/especialidade/listarEspecialidade',
    (req, res)=>{
        //{order:['id', 'DESC']}
        especialidade.findAll()
                 .then(
                     (especialidades)=>{
                        res.send(especialidades);
                     }
                 );

        //res.send('ROTA DE LISTAGEM GERAL DE ESPECIALIDADE');
    }
);

/* ROTA DE LISTAGEM POR ID DE ESPECIALIDADE (VERBO HTTP: GET)*/
router.get( '/especialidade/listarESpecialidade/:id', (req, res)=>{

    let {id} = req.params;
    // console.log("ID: " + id);

    especialidade.findByPk(id)
             .then(
                 (especialidade)=>{
                    res.send(especialidade);
                 }
             );

});

/* ROTA DE ALTERAÇÃO DE ESPECIALIDADE (VERBO HTTP: PUT)*/
router.put(
    '/especialidade/alterarEspecialidade',
    (req, res)=>{

        // console.log(req.body);
        let {id, nome_especialidade} = req.body;

        especialidade.update(
                {nome_especialidade},
                {where: {id}}
        ).then(
            ()=>{
                res.send('DADOS DE ESPECIALIDADE ALTERADOS COM SUCESSO!');
            }
        );

    }
);
/* ROTA DE EXCLUSÃO DE ESPECIALIDADE (VERBO HTTP: DELETE)*/
router.delete(
    '/especialidade/excluirEspecialidade',
    (req, res)=>{

        let {id} = req.body;

        especialidade.destroy(
            {where: {id}}
        ).then(

            ()=>{
                res.send('ESPECIALIDADE EXCLUÍDA COM SUCESSO!');
            }

        );

    }
);

module.exports = router;