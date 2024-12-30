<?php 
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Email to receive submissions
    $to = "akleang@mit.edu";
    
    // Sanitize and validate form inputs
    $first_name = htmlspecialchars(strip_tags(trim($_POST['first_name'])));
    $last_name = htmlspecialchars(strip_tags(trim($_POST['last_name'])));
    $from = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message_content = htmlspecialchars(strip_tags(trim($_POST['message'])));

    // Validate email format
    if (!filter_var($from, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format. Please go back and try again.";
        exit;
    }

    // Subject and Message
    $subject = "Personal Website Form Submission from $first_name $last_name";
    $message = "Name: $first_name $last_name\n";
    $message .= "Email: $from\n\n";
    $message .= "Message:\n$message_content\n";

    // Email Headers
    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $from\r\n";

    // Attempt to send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your message, $first_name. We will get back to you soon.";
    } else {
        echo "There was an error sending your message. Please try again later.";
    }
}
?>
