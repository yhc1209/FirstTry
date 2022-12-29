using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SimpleApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        // GET: api/<CalculatorController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "This", "is", "a", "calculator", "API" };
        }

        // GET api/<CalculatorController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return $"You gave me {id}!";
        }

        // POST api/<CalculatorController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CalculatorController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CalculatorController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        // ---------------
        [HttpPost]
        public double Post(MathRequest req)
        {
            return req.DoTheMath();
        }

        [HttpGet("action={act}&a={a}&b={b}")]
        public double Get(string act, double a, double b)
        {
            MathRequest req = new MathRequest
            {
                Action = act,
                A = a,
                B = b
            };
            return req.DoTheMath();
        }
    }
}
