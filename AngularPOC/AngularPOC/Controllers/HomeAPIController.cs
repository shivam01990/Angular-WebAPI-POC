using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularPOC.Controllers
{
    public class HomeAPIController : ApiController
    { 
        
        public string GetDataPage1()
        {
            return "Page1 Content";
        }

        public string GetDataPage2()
        {
            return "Page2 Content";
        }

        public string GetDataPage3()
        {
            return "Page3 Content";
        }

    }
}
