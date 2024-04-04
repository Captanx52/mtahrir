# MTahrir

![Logo](https://mtahr.ir/favicon.svg)

Supercharge Your Persian Typing Skills with Speed and Precision

[View Demo](https://mtahr.ir) · [Report an Issue or Request a Feature](https://github.com/Captanx52/mtahrir/issues) · [Collaborate](https://github.com/Captanx52/mtahrir/pulls)

## About The Project

I was incredibly excited when I first played the game called ZType. As I played, I realized the potential for a similar game tailored to the Persian/Farsi language. Thus, MTahrir was born. The primary goal of this project is to create a fun and engaging typing game for Persian speakers, while also advancing my JavaScript skills.

### Built With

MTahrir is built using a combination of frontend and backend technologies:

* Frontend: HTML, CSS, JavaScript
* Backend: PHP
* Database: MySQL

## Getting Started

To get started with Flasher, follow these steps:

1. Clone the repository to your local machine.
2. Update the db_connection.php file with your own database information.
3. Create the database for words using the following SQL code:

```sql
CREATE DATABASE IF NOT EXISTS mtahrir_words CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE mtahrir_words;
CREATE TABLE IF NOT EXISTS words (
    word_id INT AUTO_INCREMENT PRIMARY KEY,
    word TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## Logs

### Version 1.0.0

Initial commits and files created. There's still a lot to do, but we're gearing up to announce version one very soon!

## Contributing

We welcome contributions from anyone interested in helping create a game that both us as coding it and users as playing it will enjoy! Whether you're skilled in front-end development, back-end programming, UI/UX design, or just have creative ideas, we'd love to have you on board. No contribution is too small!

## Contributors

We appreciate and value all contributors who help make Mtahrir better!
Special thanks to [Reza Sadid](https://github.com/rezasadid753) for collaborating and contributing to UI design, styling, and backend development.

## License

MTahrir is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any inquiries or support, feel free to contact via email at [captanx52@gmail.com](mailto:captanx52@gmail.com).
