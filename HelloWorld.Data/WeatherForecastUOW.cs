using HelloWorld.Data.context;
using HelloWorld.Data.Contract;
using HelloWorld.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace HelloWorld.Data
{
    public class WeatherForecastUOW : IWeatherForecastUOW
    {
        public WeatherForecastUOW(IRepositoryProvider repositoryProvider, ForecastDbContext dBContext)
        {
            this.DbContext = dBContext;

            repositoryProvider.DbContext = this.DbContext;
            this.RepositoryProvider = repositoryProvider;
        }
        protected IRepositoryProvider RepositoryProvider { get; set; }

        private ForecastDbContext DbContext { get; set; }


        public IRepository<WeatherForecast> WeatherForecasts
        {
            get { return this.GetStandardRepo<WeatherForecast>(); }
        }


        private IRepository<T> GetStandardRepo<T>()
            where T : class
        {
            return this.RepositoryProvider.GetRepositoryForEntityType<T>();
        }

        public void Commit()
        {
            this.DbContext.SaveChanges();

            // System.Diagnostics.Debug.WriteLine("Committed");
        }

        public void Dispose()
        {
            this.Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (this.DbContext != null)
                {
                    this.DbContext.Dispose();
                }
            }
        }
    }
}
