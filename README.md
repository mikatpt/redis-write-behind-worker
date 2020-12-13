<p align="center">
  <h3 align="center">Reviews Web Worker</h3>
  <p align="center">
    A simple implementation of a Redis write-behind caching layer for Postgres.
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

In a **write-behind** cache, database entries can be written to the database source from the cache after a brief delay. Here, this is done in a few steps:

1. Service receives a POST request and **enqueues** it into a Redis queue.
2. Web Worker **dequeues** all items currently in the queue.
3. Web Worker **POSTs** all queue items into Postgres.
4. After one second, Web Worker repeats.

In this way, a buffer is built between the service and database, preventing the database from being overloaded while also reducing service load.

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
* redis
* postgres

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/HRR49Team8/reviewsWebWorker.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- CONTACT -->
## Contact

Michael Chen - mikatpt@gmail.com

Project Link: [https://github.com/HRR49Team8/reviewsWebWorker](https://github.com/HRR49Team8/reviewsWebWorker)
