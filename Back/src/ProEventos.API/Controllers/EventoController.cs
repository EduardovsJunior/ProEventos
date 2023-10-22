using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Model;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        public IEnumerable<Evento> _evento = new Evento[]{
               new Evento(){
                EventoId = 1,
                Tema = ".NET e Angular",
                Local = "Curitiba",
                Lote = "primeiro lote",
                QtdPessoas =250,
                DataEvento = DateTime.Now.AddDays(2).ToString("dd/mm/yyyy"),
                ImageURL = "foto.png"
               },
               new Evento(){
                EventoId = 2,
                Tema = "Nopvidades",
                Local = "São Paulo",
                Lote = "Segundo lote",
                QtdPessoas =350,
                DataEvento = DateTime.Now.AddDays(5).ToString("dd/mm/yyyy"),
                ImageURL = "foto1.png"
               }
            };

        public EventoController()
        {
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _evento;
        }
        [HttpPost]
        public string Post()
        {
            return "Exemplo de Post";
        }
        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"adicionando o id = {id} ";
        }
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"deletando o id = {id}";
        }

        [HttpGet("{id}")]
        public IEnumerable<Evento> GetById(int id)
        {
            return _evento.Where(evento => evento.EventoId == id);
        }
    }
}
