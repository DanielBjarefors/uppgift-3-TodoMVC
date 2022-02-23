using System;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Edge;
using OpenQA.Selenium.Support.UI;

//Lägg till en anteckning och bekräfta att den visas på sidan.
//Lägg till en anteckning och bekräfta att sidan visar "1 item left". Kryssa sedan i anteckningen och bekräfta att sidan visar "0 items left".
//Lägg till 3 anteckningar, kryssa i en av dem och bekräfta att sidan visar "2 items left".

namespace SeleniumExample
{
    [TestClass]
    public class EdgeDriverTest
    {
        private const string edgeDriverDirectory = @"C:\C#\Frontend med Jakob Kallin\edgedriver_win64 (1)";
        private const string url = "file:///C:/C%23/Frontend%20med%20Jakob%20Kallin/uppgift-3-TodoMVC/index.html";
        private EdgeDriver browser;

        // This is run before each test.
        [TestInitialize]
        public void EdgeDriverInitialize()
        {
            browser = new EdgeDriver(edgeDriverDirectory);
            // We want to go to the same URL for all tests.
            browser.Url = url;
        }

        [TestMethod]
        public void AddElement()
        {
            // Find the search input at the top of the page.
            var input = browser.FindElementByCssSelector("#inputItem");

            // Type into it.
            input.SendKeys("Horse");
            // Press Enter
            input.SendKeys(Keys.Enter);

            Assert.AreEqual("Horse", browser.FindElementByCssSelector(".listItem").Text);
        }

        [TestMethod]
        public void AddElementCheckItems()
        {
            var input = browser.FindElementByCssSelector("#inputItem");

            // Type into it.
            input.SendKeys("Cow");            
            input.SendKeys(Keys.Enter);

            Assert.AreEqual("1 item left", browser.FindElementByCssSelector("#itemsLeft").Text);
        }

        [TestMethod]
        public void AddThreeElementsCheckItems()
        {
            var input = browser.FindElementByCssSelector("#inputItem");

            // Type into it an press enter
            input.SendKeys("Cat");            
            input.SendKeys(Keys.Enter);
            input.SendKeys("Dog");            
            input.SendKeys(Keys.Enter);
            input.SendKeys("Bird");            
            input.SendKeys(Keys.Enter);

            // The browser will automatically wait until the new page has loaded. 
            IList<IWebElement> boxes = browser.FindElementsByCssSelector(".checkbox");
            boxes[1].Click();

            Assert.AreEqual("2 items left", browser.FindElementByCssSelector("#itemsLeft").Text);
        }
        // This is run after each test.
        [TestCleanup]
        public void EdgeDriverCleanup()
        {
            browser.Quit();
        }
    }
}