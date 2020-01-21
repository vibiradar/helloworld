namespace HelloWorld.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using HelloWorld.Data.Contract;
    public class BaseController : ControllerBase
    {
        protected IWeatherForecastUOW _WeatherForecastUOW { get; set; }
    }
}