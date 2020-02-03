using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using HelloWorld.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using HelloWorld.Data.Contract;

namespace HelloWorld.Controllers
{
    [Route("api/[controller]")]
    public class WeatherForecastController : BaseController
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IWeatherForecastUOW iWeatherForecastUOW)
        {
            _logger = logger;
            _WeatherForecastUOW = iWeatherForecastUOW;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            //throw new Exception();
            //var rng = new Random();
            ////System.Threading.Thread.Sleep(10000);
            //List<Country> list = new List<Country>();
            //for (int i = 1; i < 10; i++)
            //{
            //    list.Add(new Country()
            //    {
            //        CountryId = i,
            //        ItemName = "Country " + i,
            //        ItemProp = "Country" + i
            //    });
            //}
            //int id = 1;
            //var result = Enumerable.Range(1, 5).Select(index => new WeatherForecast
            //{
            //    Id = id++,
            //    Date = DateTime.Now.AddDays(index),
            //    TemperatureC = rng.Next(-20, 55),
            //    Summary = Summaries[rng.Next(Summaries.Length)],
            //    CountryList = list
            //})
            //.ToList();

            //return result;
            //_WeatherForecastUOW.WeatherForecasts.AddRange(result);
            return _WeatherForecastUOW.WeatherForecasts.GetAll();
        }


        [HttpGet("{id}")]
        public IActionResult GetById(int? id)
        {
            if (id == null)
            {

                try
                {
                    WeatherForecast forecast = _WeatherForecastUOW.WeatherForecasts.GetById(id.Value);
                    if (forecast == null)
                    {
                        return NotFound();
                    }
                    return Ok(forecast);
                }
                catch (Exception)
                {
                    throw;
                }
            }
            return BadRequest();
        }
        [HttpPost("Create")]
        public IActionResult Create([FromBody] WeatherForecast weatherForecast)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _WeatherForecastUOW.WeatherForecasts.Add(weatherForecast);
                    _WeatherForecastUOW.Commit();
                    if (weatherForecast.Id > 0)
                    {
                        return Ok(weatherForecast);
                    }
                    return NotFound();
                }
                catch (Exception)
                {

                    throw;
                }
            }
            return BadRequest();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int? id)
        {

            if (id == 0)
            {
                return BadRequest();
            }
            try
            {
                var deleteRecord = _WeatherForecastUOW.WeatherForecasts.GetById(id.Value);
                _WeatherForecastUOW.WeatherForecasts.Delete(deleteRecord);
                _WeatherForecastUOW.Commit();
                return Ok(deleteRecord);

            }
            catch (Exception)
            {

                throw;
            }
        }


        [HttpPost("Update")]
        public IActionResult Update([FromBody] WeatherForecast weatherForecast)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _WeatherForecastUOW.WeatherForecasts.Update(weatherForecast);
                    _WeatherForecastUOW.Commit();
                    return Ok(weatherForecast);
                }
                catch (Exception)
                {
                    throw;
                }
            }
            return BadRequest();
        }

    }
}
