using CMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace CMS.Controllers
{
    public class HomeController : Controller
    {
        private CMSEntities db = new CMSEntities();
        [Route]
        public ActionResult Index()
        {
            return View();
        }
    }
}
