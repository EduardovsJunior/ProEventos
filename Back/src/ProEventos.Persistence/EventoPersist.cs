using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProEventos.Domain;
using ProEventos.Persistence.Contratos;
using ProEventos.Persistence.Contexto;

namespace ProEventos.Persistence
{
    public class EventoPersist: IEventoPersist
    {
        private readonly ProEventosContext _context;
        public EventoPersist(ProEventosContext context)
        {
            _context = context;
            _context.ChangeTracker.QueryTrackingBehavior= QueryTrackingBehavior.NoTracking;
        }
        
        public async Task<Evento[]> GetAllEventosAsync(bool includePalestrante = false)
        {
            IQueryable<Evento> query = _context.Eventos
            .Include(e=>e.Lote)
            .Include(e=>e.RedeSociais);

            if (includePalestrante){
                query.Include(e=>e.PalestranteEvento)
                .ThenInclude(pe=>pe.Palestrante);
            }

            query = query.OrderBy(e=>e.Id);

            return await query.ToArrayAsync();
        }
        public async Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrante = false)
        {
            IQueryable<Evento> query = _context.Eventos
            .Include(e => e.Lote)
            .Include(e => e.RedeSociais);

            if (includePalestrante)
            {
                query.Include(e => e.PalestranteEvento)
                .ThenInclude(pe => pe.Palestrante);
            }

            query = query.OrderBy(e => e.Id)
                        .Where(e=>e.Tema.ToLower().Contains(tema.ToLower()));
            

            return await query.ToArrayAsync();
        }  
        public async Task<Evento> GetEventoByIdAsync(int eventoId, bool includePalestrante =false)
        {
            IQueryable<Evento> query = _context.Eventos
            .Include(e => e.Lote)
            .Include(e => e.RedeSociais);

            if (includePalestrante)
            {
                query.Include(e => e.PalestranteEvento)
                .ThenInclude(pe => pe.Palestrante);
            }

            query = query.OrderBy(e => e.Id)
                        .Where(e => e.Id==eventoId);


            return await query.FirstOrDefaultAsync();
        }
        
     
    }



}