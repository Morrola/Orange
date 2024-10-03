using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {

          
           
           
           
            
            

            Console.WriteLine("Enter Yuor Name");
            string Name = Console.ReadLine();
            Console.WriteLine("Enter Your Number");
            int Number = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Are You Graduated? true / false");
            bool Graduation = Convert.ToBoolean(Console.ReadLine());
            Console.WriteLine("Enrwe Your GBA ");
            double GBA = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Your Gender (M/F)");
            char Gender = Convert.ToChar(Console.ReadLine());
            Console.WriteLine("\n");
            Console.WriteLine("Name:" + Name + "\n" + "Number:" + Number + "\n" + "Graduated:" + Graduation + "\n" + "GBA :" + GBA + "\n" +"Gender:"+Gender);

        }
    }
}
