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
        public IHttpActionResult Get(string content)
        {
            return new JsonResult<string>(content, new JsonSerializerSettings(), Encoding.UTF8, this);
        }
    }
}
