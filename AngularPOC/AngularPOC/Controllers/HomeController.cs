using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularPOC.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        
        public ActionResult Page1()
        {
            return PartialView("Page1");
        }

        
        public ActionResult Page2()
        {
            return PartialView("Page2");
        }

        
        public ActionResult Page3()
        {
            return PartialView("Page3");
        }

    }
}
