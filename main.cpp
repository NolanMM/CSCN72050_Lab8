#define CROW_MAIN

#include "crow_all.h"
#include <iostream>
using namespace std;

int main()
{
    crow::SimpleApp app;

    CROW_ROUTE(app, "/CSCN72050_Lab8/Minh Nguyen Information")
    ([]()
     { 
        auto page = crow::mustache::load_text("index.html");
        return page; });
    app.port(27000).multithreaded().run();
    return 1;
}
