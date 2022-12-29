namespace SimpleApi
{
    public class MathRequest
    {
        public string Action { get; set; }
        public double A { get; set; }
        public double B { get; set; }

        public double DoTheMath()
        {
            double C = 0;
            switch (Action.ToLower())
            {
                case "sum":
                    C = A + B;
                    break;
                case "sub":
                    C = A - B;
                    break;
                case "mul":
                    C = A * B;
                    break;
                case "div":
                    C = A / B;
                    break;
                default:
                    break;
            }
            return C;
        }
    }
}
