<?php
// Include Header
include 'header.php';
?>

<h1 class="title">
    درون ریزی لغات جدید
</h1>

<p class="about">
    برای درون ریزی لغات جدید میتوانید کلمات را با فاصله وارد کنید و یا یک پاراگراف از متن مدنظر خود را وارد کنید تا بصورت خودکار کلمات شناسایی و ذخیره شوند.
</p>

<textarea id="paragraph" class="paragraph" maxlength="3000"></textarea>
<div id="characters-left" class="characters-left"></div>
<button id="analyzeButton" onclick="analyzeParagraph()" class="analyze">Analyze</button>

<form id="wordForm" class="wordForm"></form>
<button id="submitButton" onclick="submitWords()" class="submit">Submit</button>

<script>
    // Display remaining characters of text area
    let paragraph = document.getElementById('paragraph');
    window.onload = textareaLengthCheck;
    function textareaLengthCheck() {
        let paragraphLength = paragraph.value.length;
        let charactersLeft = 3000 - paragraphLength;
        let countCharacters = document.getElementById('characters-left');
        countCharacters.innerHTML = charactersLeft + " / 3000";
    }
    paragraph.addEventListener('keyup', textareaLengthCheck);
    paragraph.addEventListener('keydown', textareaLengthCheck);

    // Analyze paragraph
    function analyzeParagraph() {
        paragraph = document.getElementById("paragraph").value;

        // Normalize Persian characters by replacing variants of 'ا' and 'ی' with their standard forms
        paragraph = paragraph.replace(/أ/g, "ا");
        paragraph = paragraph.replace(/آ/g, "ا");
        paragraph = paragraph.replace(/ء/g, "ی");
        paragraph = paragraph.replace(/ئ/g, "ی");
        paragraph = paragraph.replace(/ي/g, "ی");
        paragraph = paragraph.replace(/ة/g, "ه");
        paragraph = paragraph.replace(/ۀ/g, "ه");

        // Remove punctuation, diacritics, and Arabic characters to clean up the text
        paragraph = paragraph.replace(/[ًٌٍ،؛,َُِّـ()؟:\.a-zA-Z0-9+*^%$#@!~\u200c]/g, '');

        // Split the cleaned paragraph into individual words based on whitespace
        let words = paragraph.split(/\s+/);

        // Display words with checkboxes
        let wordForm = document.getElementById("wordForm");
        wordForm.innerHTML = "";
        words.forEach(function(word) {
            let label = document.createElement("label");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "word";
            checkbox.value = word;
            checkbox.checked = true;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(word));
            wordForm.appendChild(label);
        });

        // Hide input field and analyze button
        document.getElementById("paragraph").classList.add("hide-input");
        document.getElementById("characters-left").classList.add("hide-characters-left");
        document.getElementById("analyzeButton").classList.add("hide-analyze");

        // Show submit button and exported words
        document.getElementById("wordForm").classList.add("show-wordForm");
        document.getElementById("submitButton").classList.add("show-submit");
    }

    // Submit words and redirect with success message
    function submitWords() {
        let checkedWords = [];
        let checkboxes = document.querySelectorAll('input[name="word"]:checked');
        checkboxes.forEach(function(checkbox) {
            checkedWords.push(checkbox.value);
        });

        // Create a hidden form to submit the checked words
        let form = document.createElement('form');
        form.setAttribute('method', 'post');
        form.setAttribute('action', 'save_words.php'); // PHP script to handle form submission

        // Create a hidden input field to pass the checked words to the server
        let input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'words');
        input.setAttribute('value', checkedWords.join(',')); // Convert array to comma-separated string
        form.appendChild(input);

        // Append the form to the document body and submit it
        document.body.appendChild(form);
        form.submit();

        // Redirect the page with success message
        window.location.href = 'import.php?success=true';
    }
<?php
// Include Footer
include 'footer.php';
?>
