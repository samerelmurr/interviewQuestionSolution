/**
 * Function when clicked will take the input from the user and call the algorithmMusaei
 * function. The result will be displayed in the result paragraph tag.
 */
function musaei(){
    let q = document.getElementById("q").value; // Get the input from the user
    let output = document.getElementById("output"); // Get the result paragraph tag
    let intQ = parseInt(q); // Convert the input to an integer

    if(intQ < 0 || intQ > Math.pow(10, 9) || isNaN(intQ)){ // Check if the input is valid
        output.innerHTML = "Please enter a number between 0 and 10^9";
    }else{ // If the input is valid, call the algorithmMusaei function
        const start = performance.now(); // Start the timer

        let result = algorithmMusaei(intQ); // Call the algorithmMusaei function and store the result

        const end = performance.now();  // End the timer
        const time = end - start; // Calculate the time it took to run the algorithm

        // Display the result and the time it took to run the algorithm
        const outputStr = `<p>Input: ${intQ} <br> Output t: 
        ${(result != -1 )? result: "Never"}  <br> Execution Time: ${time}  ms`;
        output.innerHTML = outputStr;
    }
}

/**
 * Calculates the Musaei's algorithm given the formulas provided in the assignment, and
 * gets the last time t that the Musaei’s populace will be equal to that number q.
 * 
 * @param {Integer} n is the q it will take from the user  
 * @returns lastIndex in the array if the number is found, -1 if the number is not found
 */
function algorithmMusaei(n){

    n = parseInt(n); // Convert the input to an integer
    const array = [1, 1, 2]; // Initialize the array with the first 3 numbers given in the assignment
    
    //Keeping in mind the formula provided in the assignment, calculate the next numbers in the array
    let 
        /**
         * if even: a(n) = a(n/2) + a(n/2 + 1) + n/2
         * M(2t) = M(t) + M(t + 1) + t (for t > 1)
         * 
         * if odd: a(n) = a((n/2) - 1) + a(n /2) + 1
         * M(2t + 1) = M(t - 1) + M(t) + 1 (for t >= 1)
         * 
         * count = n/2	
         * a = a(n/2) (if even)
         * a = a((n/2) - 1) (if odd)
         * b = a(n/2 + 1) (if even)
         * b = a(n/2) (if odd)
         * c = n/2 (if even)
         * c = 1 (if odd)
         * sum = a + b + c
         */
        a, 
        b, 
        c, 
        count, 
        sum, 
        indexCount = 0, //used to keep track of the number targetted repating itself in the array
        i = 0, // for loop counter to itterate over the array
        lastIndex = -1, // used to store the last index of the array where the number is found(-1 if not found)
        loopIndex = 0; // used to keep track of the number of times the loop has run that is n + 1

    if(n <= 1) // If the number is less than or equal to 1, return the index
        return i;
    else if(n == 2) // If the number is 2, return the index
        return i + 2;
    else{ // If the number is greater than 2, calculate the next numbers in the array

        loopIndex = n + 1; // Set the loopIndex to n + 1

        for (i = 3; i <= loopIndex; i++){
            count = parseInt(i / 2);

            if (i % 2 == 0){ // If the number is even

                a = array[count];
                b = array[count + 1];
                c = count;
                sum = a + b + c;

                if(sum == n){ // If the sum is equal to the number, store the index
                    lastIndex = i; 
                    indexCount++; // Increment the indexCount

                    // If the indexCount is 2, break out of the loop and return the index
                    if(indexCount == 2)
                        return i;
                    
                }
                array.push(sum); // Push the sum to the array
            }
            else{ // If the number is odd

                a = array[count - 1];
                b = array[count];
                c = 1;
                sum = a + b + c;

                if(sum == n){
                    lastIndex = i;
                    indexCount++;

                    if(indexCount == 2)
                        return i;
                    
                }
                array.push(sum);
            }
        }        
    }

    return lastIndex; // Return the last index of the array where the number is found(-1 if not found)
}