using HelloWorld.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace HelloWorld.Data.context
{
    public class ForecastDbContext: DbContext
    {
        public ForecastDbContext(DbContextOptions<ForecastDbContext> options)
           : base(options)
        {
        }

        public DbSet<WeatherForecast> WeatherForecasts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { }
    }
}
