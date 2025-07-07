## INTRO (30 detik)

```script
Ngapain format code manual? Males banget!

Selamat datang di MalesCast! Beberapa menit ke depan, saya Rama bakal tunjukin gimana otomasi code formatting pake GitLab CI/CD.

Sering kan:
Dev 1: 'Tab or space?'
Dev 2: 'Single quote or double quote?'
Dev 3: *conflict merge sambil nangis*

Skip drama coding style! Kita setup otomasi pake ramaid/image.
Let's skip the boring parts!
```

## BODY

1. Overview (1 menit):

   ```script
   Kita akan setup pipeline yang akan:

   - Auto-format kode PHP pakai Laravel Pint dan kode TypeScript pakai Prettier
   - Commit perubahan secara otomatis
   - Push ke branch yang sama

   Yang keren, semua ini jalan otomatis setiap ada merge request!
   ```

2. Setup Docker Image (1 menit):

   ```script
   Kita bakal pakai ramaid/image:php8.3-fullstack-cli karena sudah include, semua yang kita perlukan:

   - PHP 8.3
   - Node.js
   - Bun runtime
   - Git

   Mari kita buka script GitLab CI/CD kita.
   ```

3. Break Down Pipeline (2-3 menit):

   ```script
   Mari kita breakdown pipeline-nya:
   ```

   1. Stage dan Tags:

      ```yml
      tags:
        - php
      stage: fix-code-style
      ```

      ```script
      Ini memastikan job jalan di runner yang tepat.
      ```

   2. Variables dan Git Setup:

      ```yml
      variables:
        GIT_STRATEGY: clone
      ```

      ```script
      Nah, di sini kita pakai GIT_STRATEGY: clone. Ada 3 alasan utama kenapa kita pilih clone:

      1. Pipeline kita bakal ngelakuin git commit dan push

         Untuk ini, kita butuh full repository history.

      2. Format code itu affects semua file

         Kalau cuma fetch, bisa miss beberapa file. Jadi, kita perlu cloning secara utuh untuk mastiin semua file ke-format dengan konsisten.

      3. Mencegah git conflicts

         Full clone = full context, jadi lebih reliable buat automation.

      Yes, clone memang lebih lambat dari fetch. Tapi tenang, kita udah handle ini pakai sesuatu di bagian lain config kita. Jadi, tonton sampai habis ya!

      Sehingga kita akan mendapatkan performance tetep oke, while mastiin code style kita consistent! 👍
      ```

   3. Script Utama:

      ```yml
      script:
        - composer install ...
        - git config ...
        - ./vendor/bin/pint ...
      ```

      ```script
      Kita install dependencies, setup git, dan jalankan formatter.

      Setelah itu, kita commit perubahan dan push ke branch yang sama.
      ```

   4. Rules:

      ```yml
      rules:
        - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
          when: never
      ```

      ```script
      Di pipeline kita ada rules khusus nih:

      Kenapa main branch di-exclude? Ada 2 alasan penting:

      1. Best Practice Git Flow

         - Main branch itu 'sacred' - harus stable
         - Perubahan masuk lewat merge request
         - Hindari direct changes di branch main (utama)

      2. Code Review Process

         - Format code sebelum di-review
         - Reviewer fokus ke logic, bukan style
         - Changes terlihat jelas di MR

      Jadi, intinya adalah format di branch development atau fitur, ketika kita merge ke main udah kodenya sudah rapi! 😉
      ```

4. Demo Live (2 menit):

   ```script
   Sekarang, mari kita coba:

   1. Buat branch baru
   1. Tambah code dengan style yang berantakan
   1. Push dan buat merge request
   1. Lihat magic-nya terjadi!
   ```

5. Cache & Artifacts (1 menit):

   ```yml
   # Cache Configuration
   cache:
   key: ${CI_COMMIT_REF_SLUG}
   paths:
      - vendor/
      - node_modules/
      - .git/

   # Artifacts Configuration
   artifacts:
   expire_in: 1 week
   paths:
      - vendor/
      - node_modules/
      - .git/
   ```

   ```script
   Jangan lupa setup cache untuk speed up pipeline. Ini yang akan compensate (mengkompensasi) keputusan kita pakai clone tadi.

   Nah, di pipeline kita ada cache dan artifacts:

   Kelihatannya redundant ya? Tapi sebenernya beda fungsi:

   1. Cache
      - Untuk speed up pipeline berikutnya
      - Shared antara branch yang sama
      - Bisa dihapus GitLab kapan aja
   2. Artifacts
      - Untuk share hasil antar job
      - Bisa di-download manual
      - Ada expiry yang jelas (1 minggu)

   Di case kita:

   - Cache: Speed up composer install, bun install dan git clone
   - Artifacts: Untuk job berikutnya yang butuh vendor, node_modules, dan .git

   Jadi technically tidak redundant, tapi...

   Best Practice-nya:

   1. Kalau cuma untuk speed up: Pakai cache aja
   2. Kalau perlu share ke job lain: Artifacts aja
   3. Kalau butuh keduanya: Ya udah gapapa ada dua-duanya 😄
   ```

## CONCLUSION (30-60 detik)

```script
Nah, dengan setup ini, tim kita bisa fokus ke logic bisnis tanpa kuatir soal code style. Pipeline akan handle formatting secara otomatis!

Kalau kalian mau coba, bisa baca MalesCast.com link ada di deskripsi! Jangan lupa like, subscribe, dan share ke temen-temen developer lainnya.
```

## OUTRO

```script
Thanks for watching! See you in the next video!
```
