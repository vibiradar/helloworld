using HelloWorld.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace HelloWorld.Data.Contract
{
    public interface IWeatherForecastUOW : IDisposable
    {
        IRepository<WeatherForecast> WeatherForecasts { get; }
        void Commit();

    }
}
