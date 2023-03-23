#define CROW_MAIN

#include "crow_all.h"
#include <iostream>
using namespace std;

int main()
{
    crow::SimpleApp app;

    CROW_ROUTE(app, "/")
    ([]()
     { return crow::mustache::load("index.html").render(); });

    CROW_CATCHALL_ROUTE(app)
    ([](crow::response &res)
     {
        if (res.code == 404)
        {
            res.body = "The URL does not seem to be correct.";
        }
        else if (res.code == 405)
        {
            res.body = "The HTTP method does not seem to be correct.";
        }
        res.end(); });
    app.port(27000).multithreaded().run();
    return 1;
}
