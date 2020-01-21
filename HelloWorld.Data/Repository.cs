using HelloWorld.Data.Contract;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Linq.Expressions;

namespace HelloWorld.Data
{
    public class Repository<T> : IRepository<T> where T : class
    {
        public Repository(DbContext dbContext)
        {
            if (dbContext == null)
                throw new ArgumentNullException("dbContext");
            DbContext = dbContext;
            DbSet = DbContext.Set<T>();
        }

        protected DbContext DbContext { get; set; }

        protected DbSet<T> DbSet { get; set; }

        public virtual IQueryable<T> GetAll()
        {
            return DbSet;
        }

        public virtual T GetById(int id)
        {
            // return DbSet.FirstOrDefault(PredicateBuilder.GetByIdPredicate<T>(id));
            return DbSet.Find(id);
        }

        public virtual void Add(T entity)
        {
            EntityEntry dbEntityEntry = DbContext.Entry(entity);
            if (dbEntityEntry.State != EntityState.Detached)
            {
                dbEntityEntry.State = EntityState.Added;
            }
            else
            {
                DbSet.Add(entity);
            }
        }

        public virtual void AddRange(List<T> entitys)
        {
            DbSet.AddRange(entitys);
            //EntityEntry dbEntityEntry = DbContext.Entry<List<T>>(entitys);
            //if (dbEntityEntry.State != EntityState.Detached)
            //{
            //    dbEntityEntry.State = EntityState.Added;
            //}
            //else
            //{
            //    DbSet.AddRange(entitys);
            //}
        }

        public virtual void Update(T entity)
        {
            //EntityEntry dbEntityEntry = DbContext.Entry(entity);
            //if (dbEntityEntry.State == EntityState.Detached)
            //{
            //    DbSet.Attach(entity);
            //}
            //dbEntityEntry.State = EntityState.Modified;
            DbSet.Update(entity);
        }

        public virtual void Delete(T entity)
        {
            //EntityEntry dbEntityEntry = DbContext.Entry(entity);
            //if (dbEntityEntry.State != EntityState.Deleted)
            //{
            //    dbEntityEntry.State = EntityState.Deleted;
            //}
            //else
            //{
            //    DbSet.Attach(entity);
            //    DbSet.Remove(entity);
            //}
            DbSet.Remove(entity);
        }

        public virtual void Delete(int id)
        {
            var entity = GetById(id);
            if (entity == null) return; // not found; assume already deleted.
            Delete(entity);
        }

        public IEnumerable<T> FindBy(Expression<Func<T, bool>> predicate)
        {
            yield return DbSet.FirstOrDefault(predicate);
        }

        //public IEnumerable<T> GetAllGetAll(Expression<Func<T, object>> predicate)
        //{
        //    return DbSet.Include(predicate);
        //}

        public IQueryable<T> GetAll(params Expression<Func<T, object>>[] predicates)
        {
            IQueryable<T> set = DbSet;

            foreach (var includeExpression in predicates)
            {
                set = set.Include(includeExpression);
            }
            return set;
        }

        //public virtual T GetById(int id, params Expression<Func<T, object>>[] predicates)
        //{
        //    IQueryable<T> set = DbSet;

        //    foreach (var includeExpression in predicates)
        //    {
        //        set = set.Include(includeExpression);
        //    }


        //    return set.FirstOrDefault();
        //}
    }
}
