const express = require('express');

const app = express();
const router = express.Router();

const medico = require('../model/Medico');

// INSERÇÃO DE UM NOVO DADO
router.post
('/medico/cadastrarMedico',(req, res)=>{

    let{ nome_medico, email_medico, telefone_medico, celular_medico } = req.body;

    medico.create(
        {
            nome_medico, 
            email_medico, 
            telefone_medico, 
            celular_medico
     
        }
    ).then(
        ()=>{
            res.send('DADOS DE MEDICOS INSERIDOS COM SUCESSO!');      
        }
    );

    }
);

// LISTAGEM DE DADO
router.get('/medico/listarMedico', (req, res)=>{

    medico.findAll()
          .then((medicos)=>{
              res.send(medicos)
          });
});

router.get('/medico/listarMedico/:id', (req, res)=>{

    const { id } = req.params

    medico.findByPk(id)
          .then((medicoId)=>{
              res.send(medicoId)
          });
});

// EXCLUSÃO DE DADO
router.delete('/medico/excluirMedico/:id', (req, res)=>{

    const { id } = req.params;

    medico.findByPk(id)
         .then((medico)=>{

            medico.destroy({
                where:{id}
            }).then(
                ()=>{

            res.send('DADOS DE MEDICO EXCLUIDOS COM SUCESSO!');

                }
            );

         });

});

// ALTERAÇÃO DE UM NOVO DADO
router.put('/medico/editarMedico', (req, res)=>{

    let{ id, nome_medico, email_medico, telefone_medico, celular_medico } = req.body;
    
     medico.update(
         {  nome_medico, 
            email_medico, 
            telefone_medico, 
            celular_medico
        },
        { where:{ id }}
     ).then(
         ()=>{
             res.send('DADOS MEDICO ALTERADOS COM SUCESSO');

     });

    }
);
module.exports = router;