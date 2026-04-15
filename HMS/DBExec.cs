
using MySql.Data.MySqlClient;
using System;
using System.Configuration;
using System.Data;
using System.Web;

namespace HMS
{
    public class DBExec
    {
        string sqlserver, userid, password, database;
        int cmdtimeout, Port;
        public string constr;
        public string BaseURL;
        public DBExec()
        {
            sqlserver = ConfigurationManager.AppSettings["SqlServer"];
            Port = Convert.ToInt32(ConfigurationManager.AppSettings["Port"]);
            userid = ConfigurationManager.AppSettings["UserID"];
            password = ConfigurationManager.AppSettings["Password"];
            string IsSession = ConfigurationManager.AppSettings["IsSession"];
            if (IsSession == "1")
            {
                try
                {
                    database = HttpContext.Current.Session["DataBaseName"].ToString();
                }
                catch


                {
                    HttpContext.Current.Server.ClearError();
                    // Response.Headers.Clear();
                    //HttpContext.Current.Response.Redirect("/Home/Login", false);
                    HttpContext.Current.Response.Redirect("~/SuccessfullLogout/Index", false);
                }

            }
            else
            {
                database = ConfigurationManager.AppSettings["Database"];
            }
            //database = HttpContext.Current.Session["DataBaseName"].ToString();

            cmdtimeout = Convert.ToInt16(ConfigurationManager.AppSettings["SqlCommandTime"]);
            constr = "Connect Timeout=" + ConfigurationManager.AppSettings["SqlConnectionTime"] + ";pooling='true' ;Max Pool Size=200;Data Source=" + sqlserver + ";Port=" + Port + ";Initial Catalog=" + database + ";User ID=" + userid + ";Password=" + password;
        }
        public DataSet SelectDataFromDB(MySqlCommand sqlcmd)
        {

            MySqlConnection con = new MySqlConnection(constr);
            sqlcmd.Connection = con;
            sqlcmd.CommandTimeout = cmdtimeout;
            MySqlDataAdapter sda = new MySqlDataAdapter(sqlcmd);
            DataSet ds = new DataSet();
            try
            {
                con.Open();
                sda.Fill(ds);
                con.Close();
            }
            catch (Exception e)
            {
                string error = e.Message.ToString() + ", " + Convert.ToString(e.InnerException);
            }
            finally
            {
                con.Close();
            }
            return ds;
        }

        public DataSet SelectDataFromDBB(MySqlCommand sqlcmd)
        {
            cmdtimeout = Convert.ToInt16(ConfigurationManager.AppSettings["SqlCommandTime"]);
            database = HttpContext.Current.Session["DDbname"].ToString();
            constr = "Connect Timeout=" + ConfigurationManager.AppSettings["SqlConnectionTime"] + ";pooling='true' ;Max Pool Size=200;Data Source=" + sqlserver + ";Initial Catalog=" + database + ";User ID=" + userid + ";Password=" + password;
            MySqlConnection con = new MySqlConnection(constr);
            sqlcmd.Connection = con;
            sqlcmd.CommandTimeout = cmdtimeout;
            MySqlDataAdapter sda = new MySqlDataAdapter(sqlcmd);
            DataSet ds = new DataSet();
            try
            {
                con.Open();
                sda.Fill(ds);
                con.Close();
            }
            catch (Exception e)
            {
                string error = e.Message.ToString() + ", " + Convert.ToString(e.InnerException);
            }
            finally
            {
                con.Close();
            }
            return ds;
        }
    }
}