//Show/Hide Code btn Math Challenge
$(function () {
    
    //The Math Challenge
        $("#btnMain").click(function () {
        //step 1: get the user data
        var num1 = Number($("#input1").val());
        var num2 = Number($("#input2").val());
        var num3 = Number($("#input3").val());
        var num4 = Number($("#input4").val());
        var num5 = Number($("#input5").val());

        //Step 2: Make calculations with the data
        var min = Math.min(num1, num2, num3, num4, num5);
        var max = Math.max(num1, num2, num3, num4, num5);
        var sum = num1 + num2 + num3 + num4 + num5;
        var mean = sum / 5;
        var divi = num1 / num2 / num3 / num4 / num5;

        //Step 3: Output the data to the user
        $("#small").text("The smallest number is " + min);
        $("#big").text("The biggest number is " + max);
        $("#results").text("The sum of your numbers are " + sum);
        $("#division").text("The product of your numbers are " + divi);
        $("#average").text("The average of your numbers are " + mean);
        });

        //Clear btn for Math        
        $("#clearMain").click(function () {
            $("#input1,#input2,#input3,#input4,#input5").val("");
            $("#small").text("");
            $("#big").text("");
            $("#results").text("");
            $("#division").text("");
            $("#average").text("");
            });

    //Show/HIde Code btn Math
    $("#mainCode").hide();

    $("#codeMain").click(function () {
    $("#mainCode").toggle();

    if ($(this).text() == "Code") {
        $(this).text("Hide");
    }
    else {
        $(this).text("Code")
    };
    });
    //Number Validation
    $("#input1, #input2, #input3, #input4, #input5").keypress(function (e) {
        if (!(e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
            return false;
        }
    })
})

//Show/Hide Code btn Factorial
$(function () {
    $("#factorCode").hide();

    $("#codeFact").click(function () {
    $("#factorCode").toggle();

    if ($(this).text() == "Code") {
        $(this).text("Hide");
    }
    else { $(this).text("Code") }
    })

    //The Factorial Challenge
    $("#btnFact").click(function () {
        //Step 1: Get user data
        var factual = Number($("#fact").val());
        //Step 2: Calculate Factorial
        //i represents the integer the user inputs
        var i = factual;
        //mult matches the decremented integer that needs to be multiplied alongside users number
        var mult = 1;
        //for loop expresses how the integer from user will be decremented
        for (; i > 0; i--) {
            //this represents 1 * user's integer
            mult *= i;
        }
        $("#factorResults").text("The Factorial of your number will be " + mult);
    });
    //Clear btn for Factorial
    $("#clearFact").click(function () {
        $("#fact").val("")
        $("#factorResults").text("")
    })
    //Number Validation
    $("#fact").keypress(function (e) {
        if (!(e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
            return false;
        }
    })


})
//Show/Hide Code btn Palindrome
$(function () {
    $("#dromeCode").hide();
    $("#codePal").click(function () {
    $("#dromeCode").toggle();

    if ($(this).text() == "Code") {
        $(this).text("Hide");
    }
    else { $(this).text("Code") }
    })

    //The Palindrome Challenge
    $("#btnPal").click(function () {
        //Step 1: Get user data
        var palin = $("#Pal").val();
        //Step 2:Calculate how to determine palindrome
        var lowCase = palin.toLowerCase();
        var array = lowCase.split("");
        var reArray = array.reverse();
        var string = reArray.join("");
        //Step 3: Output the data to user using if else statement
        if (lowCase === string) {
            $("#palindromeResults").text('Hooray ' + palin + ' is a palindrome!')
        }
        else {
            $("#palindromeResults").text('This is not a palindrome.')
        }
    })
    //Clear btn for Palindrome
    $("#clearPal").click(function () {
        $("#Pal").val("");
        $("#palindromeResults").text("")
    })

    //Number Validation
    $("#input1, #input2, #input3, #input4, #input5").keypress(function (e) {
        if (!(e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
            return false;
        }
    })
})
//Show/Hide Code btn FizzBuzz
$(function () {
    $("#fizzyCode").hide();
    $("#codeFizz").click(function () {
    $("#fizzyCode").toggle();

    if ($(this).text() == "Code") {
        $(this).text("Hide");
    }
    else { $(this).text("Code") }
    })

    //The ominous FizzBuzz Challenge
    $("#btnFizz").click(function () {
        //Step 1: Get user data
        var fizz = $("#fizz").val();
        var buzz = $("#buzz").val();
        //Step 2: Calculate for FizzBuzz
        var returnValue = "";
        var i = 1
        for (; i <= 100; i++) {
            if (i % fizz == 0 && i % buzz == 0) {
                //Step 3: Output findings to user
                $("#fizzbuzzResults").text(returnValue += 'FizzBuzz ');
            }
            else if (i % fizz == 0) {
                $("#fizzbuzzResults").text(returnValue += 'Fizz ');
            }
            else if (i % buzz == 0) {
                $("#fizzbuzzResults").text(returnValue += 'Buzz ');
            }
            else {
                $("#fizzbuzzResults").text(returnValue += i + ' ');
            }
        }
    })
    //Clear btn for Fizzbuzz
    $("#clearFizz").click(function () {
        $("#fizz").val("");
        $("#buzz").val("");
        $("#fizzbuzzResults").text("")
    })

    //Number Validation
    $("#fizz, #buzz").keypress(function (e) {
        if (!(e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
            return false;
        }
    })
})