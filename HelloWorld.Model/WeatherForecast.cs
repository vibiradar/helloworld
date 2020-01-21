using System;
using System.Collections.Generic;

namespace HelloWorld.Model
{
    public class WeatherForecast
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string Summary { get; set; }
        public List<Country> CountryList { get; set; }
    }
    public class Country
    {
        public int CountryId { get; set; }
        public string ItemName { get; set; }
        public string ItemProp { get; set; }
    }
}
