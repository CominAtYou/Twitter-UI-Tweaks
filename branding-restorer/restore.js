// restore favicon
document.querySelector('link[rel="shortcut icon"]').setAttribute("href", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACWUlEQVRYhe2WTU4bQRCFv9c2CYso8Swj7HhuEG4QcwLMCWIvcMQOTgA+AexQ7Ej4COQEtk+QyQkyCSBlN4OUVbCnsgCD/xkTUBTJbzfVrXpfdfV0Nyy11D+WHitR/jgqkdW+YB3IYYSgzlU/qf/c8cLheb9WCeKqF08ArDWiCkbu4oN3tIj5m+blvmEHs8YtsbpBLKdNmcKz2qvqYGwEoNCITpE2k8T20kKsNaKKk07SzJURur5tXGXIXdS8AMCNkEpFAOd0mG9e7qdJ6pxSzRPECQT9FbWdwx+K3ynfjL/c9PCGiND6Vj3f8TrTkuaPo5KyaqcBuMtp1bOa17otYGywO4btK6t2vhm3X3+MyhO5MneVpFFPtjVsDpAd+VjhKOnx3iA3ykEp61QqNOPYjI6ZdZUQIFcESw3w/IpgPDYCEEP8EquDDmfkyEmUJZWv1y69OUC8SjwX4EWPIEHfJEJsseVN4z/494c1tgc4FZSewBwz+zotPgKQhdZjGw9pov8TAGHNC4TtPYW7zSjOjQd+bHtHmFUlwkczN+sOTr57AQBk5JLEPovJXfsQaU5rs9OCiSMQOlzsJ5shU+uslpsJMHUFzre9jrD633rLCDP9ZG6eue+BQiOqALtIbx8CYNjG+fb0eyQVwEB+I1pPpPb4ET3fffTSeRCA34jWe3KbwnZJaX597drWfZVPABQ+ReUkISfDl1wRZ4ufiGbdTJ9KOPQESw0Atz2vIL1b1NjEQdqqZwIM5J9EfvKbsokS4EsqDvoviM3sO0YgCNwzWuGUS2appf4b/QHXNfBk6YeX2wAAAABJRU5ErkJggg==");

// Wait for title to be created
const observer = new MutationObserver(() => {
    if (document.querySelector('title')) {
        document.title = "Twitter";
        observer.disconnect();

        new MutationObserver(() => {
            if (document.title.endsWith("X")) {
                document.title = document.title.slice(0, -1) + "Twitter";
            }
            else if (/^.{1,50} on X:/.test(document.title)) {
                document.title = document.title.replace("on X:", "on Twitter:");
            }
        }).observe(document.querySelector('title'), {
            subtree: true,
            characterData: true,
            childList: true
        });
    }
});


observer.observe(document.head, { childList: true, subtree: true });
