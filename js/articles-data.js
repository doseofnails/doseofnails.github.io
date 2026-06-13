// =============================================================================
// Dose of Nails — Static article data
//
// To add a new article: copy the template block at the bottom, fill in all
// fields, and add it to the ARTICLES_DATA array.
// Articles are displayed newest-first (sorted by `date`).
// =============================================================================

const ARTICLES_DATA = [
	// ── Article 1 ───────────────────────────────────────────────────────────────
	{
		slug: "how-to-take-care-of-your-nails",
		date: "2025-05-20",
		category: "care",
		cover_image: "img/", // optional — paste an image URL here

		title_en: "How to Take Care of Your Nails",
		title_id: "Cara Merawat Kuku Kamu",

		excerpt_en:
			"Healthy and well-maintained nails not only improve your appearance but also reflect good personal hygiene.",
		excerpt_id:
			"Kuku yang sehat dan terawat tidak hanya membuat penampilan lebih menarik, tetapi juga mencerminkan kebersihan diri yang baik.",

		body_en: `
Healthy and well-maintained nails not only improve your appearance but also reflect good personal hygiene. Taking care of your nails can help prevent breakage, infections, and other common nail problems. Fortunately, maintaining healthy nails does not require expensive treatments. By following a few simple steps regularly, you can keep your nails strong, clean, and beautiful.

Before starting your nail care routine, prepare the following items:

- Nail clippers
- Nail file
- Cuticle oil or moisturizer
- Hand soap
- Soft towel
- Nail brush (optional)

## Step 1: Keep Your Nails Clean

Wash your hands regularly with soap and water to remove dirt and bacteria. Use a nail brush to gently clean underneath your nails if necessary. Keeping your nails clean helps prevent infections and maintains their healthy appearance.

## Step 2: Trim Your Nails Regularly

Use nail clippers to trim your nails every few weeks or whenever they become too long. Cutting your nails regularly prevents them from breaking or snagging on objects. Make sure to cut them straight across and avoid trimming them too short.

## Step 3: Shape Your Nails

After trimming, use a nail file to smooth rough edges and shape your nails. File in one direction rather than moving the file back and forth, as this can weaken the nail structure and cause splitting.

## Step 4: Moisturize Your Nails and Cuticles

Apply cuticle oil or hand moisturizer daily to keep your nails and the surrounding skin hydrated. Moisturized nails are less likely to become brittle and break easily. Gently massage the product into your cuticles to improve nail health.

## Step 5: Protect Your Nails

Wear gloves when washing dishes, cleaning, or handling harsh chemicals. Prolonged exposure to water and cleaning products can weaken nails and dry out the surrounding skin. Protective gloves help maintain nail strength and prevent damage.

## Step 6: Maintain a Healthy Diet

Strong nails start from within. Eat foods rich in vitamins, minerals, and protein, such as eggs, fish, nuts, fruits, and vegetables. Drinking enough water throughout the day also helps keep your nails hydrated and healthy.

## Tips for Healthy Nails

- Avoid biting your nails or picking at your cuticles.
- Use nail polish remover in moderation, as excessive use may dry out nails.
- Allow your nails to rest between gel or acrylic nail applications.
- Replace old nail care tools regularly to maintain hygiene.

Taking care of your nails is a simple habit that can make a significant difference in both appearance and health. By keeping your nails clean, trimming and shaping them regularly, moisturizing them, and protecting them from damage, you can enjoy stronger and healthier nails. Consistent care and healthy lifestyle choices will help your nails look their best every day.

---

**Source:**
1. Mayo Clinic – [Fingernails: Do's and Don'ts for Healthy Nails](https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/nails/art-20044954)
`.trim(),

		body_id: `
Kuku yang sehat dan terawat tidak hanya membuat penampilan lebih menarik, tetapi juga mencerminkan kebersihan diri yang baik. Merawat kuku secara rutin dapat membantu mencegah kuku patah, infeksi, dan berbagai masalah kuku lainnya. Kabar baiknya, perawatan kuku tidak selalu membutuhkan biaya yang mahal. Dengan beberapa langkah sederhana yang dilakukan secara konsisten, Anda dapat menjaga kuku tetap kuat, bersih, dan indah.

Sebelum memulai perawatan kuku, siapkan beberapa perlengkapan berikut:

- Gunting kuku
- Kikir kuku
- Minyak kutikula atau pelembap
- Sabun cuci tangan
- Handuk bersih
- Sikat kuku (opsional)

## Langkah 1: Jaga Kebersihan Kuku

Cuci tangan secara teratur menggunakan sabun dan air mengalir untuk menghilangkan kotoran serta bakteri. Jika diperlukan, gunakan sikat kuku untuk membersihkan bagian bawah kuku dengan lembut. Menjaga kebersihan kuku dapat membantu mencegah infeksi dan mempertahankan penampilan kuku yang sehat.

## Langkah 2: Potong Kuku Secara Teratur

Gunakan gunting kuku untuk memotong kuku secara rutin atau ketika kuku sudah terlalu panjang. Memotong kuku secara teratur dapat mencegah kuku patah atau tersangkut pada benda lain. Sebaiknya potong kuku secara lurus dan hindari memotongnya terlalu pendek.

## Langkah 3: Bentuk Kuku dengan Kikir

Setelah memotong kuku, gunakan kikir untuk merapikan dan membentuk tepi kuku. Kikir kuku dalam satu arah agar struktur kuku tetap kuat. Mengikir bolak-balik dapat menyebabkan kuku menjadi lebih rapuh dan mudah terbelah.

## Langkah 4: Berikan Pelembap pada Kuku dan Kutikula

Oleskan minyak kutikula atau pelembap tangan setiap hari untuk menjaga kelembapan kuku dan kulit di sekitarnya. Kuku yang lembap cenderung lebih kuat dan tidak mudah patah. Pijat perlahan area kutikula agar nutrisi terserap dengan baik.

## Langkah 5: Lindungi Kuku dari Kerusakan

Gunakan sarung tangan saat mencuci piring, membersihkan rumah, atau menggunakan bahan kimia pembersih. Paparan air dan bahan kimia secara berlebihan dapat membuat kuku menjadi kering dan lemah. Sarung tangan dapat membantu melindungi kuku dari kerusakan.

## Langkah 6: Konsumsi Makanan Bergizi

Kesehatan kuku juga dipengaruhi oleh asupan nutrisi. Konsumsilah makanan yang kaya protein, vitamin, dan mineral seperti telur, ikan, kacang-kacangan, buah-buahan, dan sayuran. Selain itu, pastikan untuk minum air yang cukup setiap hari agar tubuh dan kuku tetap terhidrasi dengan baik.

## Tips Menjaga Kuku Tetap Sehat

- Hindari kebiasaan menggigit kuku atau mengelupas kutikula.
- Gunakan cairan penghapus cat kuku secukupnya karena penggunaan berlebihan dapat membuat kuku kering.
- Beri waktu istirahat pada kuku sebelum melakukan pemasangan gel nail atau acrylic nail kembali.
- Bersihkan dan ganti alat perawatan kuku secara berkala untuk menjaga kebersihan.

Merawat kuku merupakan kebiasaan sederhana yang dapat memberikan manfaat besar bagi kesehatan dan penampilan. Dengan menjaga kebersihan kuku, memotong dan membentuknya secara teratur, menggunakan pelembap, serta melindunginya dari kerusakan, Anda dapat memiliki kuku yang lebih kuat dan sehat. Perawatan yang dilakukan secara konsisten akan membantu menjaga keindahan kuku setiap hari.
`.trim(),
	},

	// ── Article 2 ───────────────────────────────────────────────────────────────
	{
		slug: "how-to-use-press-on-nails",
		date: "2025-05-21",
		category: "tips",
		cover_image: "", // optional — paste an image URL here

		title_en: "How to Use Press-On Nails",
		title_id: "Cara Menggunakan Press-On Nails",

		excerpt_en:
			"Press-on nails are a quick and convenient way to achieve beautiful nails without spending hours at a salon.",
		excerpt_id:
			"Press-on nails menjadi salah satu solusi praktis bagi siapa saja yang ingin memiliki kuku cantik tanpa harus menghabiskan banyak waktu di salon.",

		body_en: `
Press-on nails are a quick and convenient way to achieve beautiful nails without spending hours at a salon. They come in a wide variety of shapes, sizes, colors, and designs, making it easy to find a style that suits your personal preference. When applied correctly, press-on nails can look natural and last for several days or even weeks.

Before applying your press-on nails, open our nail kit package to use the following items:

- A set of press-on nails
- Nail glue or adhesive tabs
- Nail file
- Cuticle pusher
- Alcohol or nail cleanser

## Step 1: Clean Your Natural Nails

Wash your hands thoroughly with soap and water to remove dirt and oil. Make sure your nails are completely clean and free from lotion or other products. Then, wipe each nail with alcohol or a nail cleanser to create a clean surface for better adhesion.

## Step 2: Trim and Shape Your Nails

Trim your natural nails if they are too long and file them into your desired shape. Gently push back your cuticles using a cuticle pusher to create a smooth and even nail surface. This step helps the press-on nails fit more securely.

## Step 3: Choose the Correct Size

Match each press-on nail to the size of your natural nail. Select a size that covers the nail comfortably without overlapping onto the surrounding skin. Arrange the nails in order before application to make the process easier.

## Step 4: Apply Nail Glue or Adhesive Tabs

Apply a small amount of nail glue to both your natural nail and the back of the press-on nail. If you are using adhesive tabs, place the tab on your natural nail and remove the protective film before applying the press-on nail. Avoid using too much glue, as it may affect the final appearance.

## Step 5: Attach the Press-On Nails

Position the press-on nail close to your cuticle and press it firmly onto your natural nail. Hold it in place for about 20–30 seconds to ensure a secure bond. Repeat the process for all fingers until the application is complete.

## Step 6: Make Final Adjustments

Once all the press-on nails are attached, check the overall appearance. If necessary, use a nail file to adjust the shape or length for a more natural and polished look.

## Tips for Long-Lasting Press-On Nails

- Avoid contact with water for at least one to two hours after application.
- Wear gloves when washing dishes or using cleaning products.
- Do not use your nails to open packages or lift heavy objects.
- Make sure your nails are clean and completely dry before application.
- Store unused press-on nails in a clean and dry place for future use.

## How to Remove Press-On Nails Safely

Do not forcefully pull off your press-on nails, as this may damage your natural nails. Instead, soak your hands in warm soapy water for several minutes to loosen the adhesive. Gently lift the edges and remove the nails carefully. Clean any remaining glue with a suitable nail adhesive remover.

Press-on nails offer a simple and affordable way to achieve a stylish manicure at home. By properly preparing your natural nails, selecting the correct sizes, and applying them carefully, you can enjoy a professional-looking result that lasts longer. Following proper application and removal techniques will also help keep your natural nails healthy and strong.

---

**Source:**
1. KISS USA – [How to Apply Press-On Nails](https://www.kissusa.com/)
`.trim(),

		body_id: `
Press-on nails menjadi salah satu solusi praktis bagi siapa saja yang ingin memiliki kuku cantik tanpa harus menghabiskan banyak waktu di salon. Selain mudah digunakan, press-on nails juga tersedia dalam berbagai bentuk, ukuran, warna, dan desain yang dapat disesuaikan dengan gaya pribadi. Dengan pemasangan yang tepat, press-on nails dapat terlihat natural dan bertahan selama beberapa hari hingga beberapa minggu.

Sebelum memasang press-on nails, buka nail-kit yang sudah kami siapkan yang berisi beberapa perlengkapan berikut:

- Satu set press-on nails
- Lem kuku atau adhesive tabs
- Nail file (kikir kuku)
- Cuticle pusher
- Alkohol atau nail cleanser

## Langkah 1: Bersihkan Kuku Asli

Cuci tangan menggunakan sabun dan air hingga bersih. Pastikan tidak ada sisa minyak, lotion, atau kotoran pada permukaan kuku. Setelah itu, gunakan alkohol atau nail cleanser untuk membersihkan kuku agar lem dapat menempel dengan lebih baik.

## Langkah 2: Rapikan dan Bentuk Kuku

Potong kuku asli jika terlalu panjang, kemudian kikir hingga rapi. Dorong kutikula secara perlahan menggunakan cuticle pusher untuk menciptakan permukaan kuku yang lebih luas dan rata. Langkah ini membantu press-on nails menempel dengan lebih sempurna.

## Langkah 3: Pilih Ukuran Press-On Nails yang Sesuai

Cocokkan setiap press-on nail dengan ukuran kuku asli Anda. Pilih ukuran yang menutupi seluruh permukaan kuku tanpa terlalu besar atau terlalu kecil. Susun terlebih dahulu sesuai urutan jari agar proses pemasangan lebih mudah.

## Langkah 4: Aplikasikan Lem atau Adhesive Tabs

Jika menggunakan lem kuku, oleskan sedikit lem pada kuku asli dan bagian belakang press-on nail. Jika menggunakan adhesive tabs, tempelkan tab pada kuku asli sesuai ukuran yang diperlukan. Hindari penggunaan lem secara berlebihan karena dapat membuat pemasangan kurang rapi.

## Langkah 5: Tempelkan Press-On Nails

Letakkan press-on nail tepat di atas kutikula dengan posisi yang sesuai. Tekan dan tahan selama sekitar 20–30 detik untuk memastikan kuku menempel dengan kuat. Ulangi langkah yang sama pada seluruh jari.

## Langkah 6: Rapikan Hasil Pemasangan

Setelah semua press-on nails terpasang, periksa kembali setiap kuku. Jika diperlukan, gunakan nail file untuk merapikan bentuk atau panjang kuku agar terlihat lebih natural dan sesuai dengan keinginan Anda.

## Tips Agar Press-On Nails Tahan Lama

- Hindari kontak langsung dengan air selama satu hingga dua jam setelah pemasangan.
- Gunakan sarung tangan saat mencuci piring atau membersihkan rumah.
- Hindari menggunakan kuku sebagai alat untuk membuka atau mengangkat benda keras.
- Pastikan kuku dalam kondisi bersih dan kering sebelum pemasangan.
- Simpan sisa press-on nails di tempat yang bersih agar dapat digunakan kembali jika memungkinkan.

## Cara Melepas Press-On Nails dengan Aman

Jangan menarik atau memaksa press-on nails untuk lepas karena dapat merusak kuku asli. Rendam kuku dalam air hangat yang dicampur sabun selama beberapa menit hingga lem mulai melunak. Setelah itu, lepaskan kuku secara perlahan dan bersihkan sisa lem menggunakan remover yang sesuai.

Press-on nails merupakan pilihan yang praktis dan mudah untuk mendapatkan tampilan kuku yang cantik dalam waktu singkat. Dengan membersihkan kuku, memilih ukuran yang tepat, serta memasangnya dengan benar, press-on nails dapat terlihat natural dan bertahan lebih lama. Perawatan yang tepat selama penggunaan juga akan membantu menjaga kesehatan kuku asli dan membuat hasil pemasangan tetap maksimal.
`.trim(),
	},

	// ── Article 3 ───────────────────────────────────────────────────────────────
	{
		slug: "how-to-remove-press-on-nails",
		date: "2025-05-22",
		category: "care",
		cover_image: "", // optional — paste an image URL here

		title_en: "How to Remove Press-On Nails",
		title_id: "Cara Melepas Press-On Nails",

		excerpt_en:
			"Removing press-on nails incorrectly can damage your natural nails. Follow these safe steps to protect your nails during removal.",
		excerpt_id:
			"Melepas press-on nails dengan cara yang tidak tepat dapat merusak kuku asli. Ikuti langkah-langkah berikut untuk melepasnya dengan aman.",

		body_en: `
Press-on nails are a convenient and stylish way to achieve a salon-quality manicure at home. However, removing them incorrectly can damage your natural nails and cuticles. To keep your nails healthy, it is important to remove press-on nails gently and safely. By following the proper steps, you can prevent breakage, irritation, and unnecessary damage to your natural nails.

Before removing your press-on nails, prepare the following items:

- A bowl of warm water
- Mild soap
- Cuticle oil or baby oil
- Wooden cuticle stick
- Soft towel
- Nail buffer (optional)
- Moisturizer or hand cream

## Step 1: Soak Your Nails

Fill a bowl with warm water and add a small amount of mild soap. Soak your fingertips for 10–15 minutes to help loosen the adhesive holding the press-on nails in place. The warm water softens the glue, making the removal process easier and safer.

![Soaking press-on nails in warm water](/img/background.JPG)

## Step 2: Apply Cuticle Oil

After soaking your nails, apply cuticle oil around the edges of each press-on nail. Allow the oil to seep underneath the nail for a few minutes. This helps break down the adhesive and reduces the risk of damaging your natural nails during removal.

## Step 3: Gently Lift the Edges

Using a wooden cuticle stick, carefully lift the edge of the press-on nail. Start from the sides and work slowly around the nail. If you feel resistance, do not force it. Instead, soak your nails for a few more minutes and try again.

## Step 4: Remove the Press-On Nails

Once the adhesive has loosened, gently slide the cuticle stick underneath the press-on nail and lift it away from your natural nail. Repeat the process for each finger. Take your time and avoid pulling or peeling the nails off abruptly.

## Step 5: Remove Any Remaining Adhesive

After all press-on nails have been removed, you may notice leftover glue on your natural nails. Gently buff the surface of the nails or use a nail-safe adhesive remover to remove any residue. Be careful not to over-buff, as this can weaken your nails.

## Step 6: Moisturize Your Nails and Hands

Finish the process by applying cuticle oil and hand cream to restore moisture. Removal can leave nails and skin slightly dry, so proper hydration helps keep them healthy and strong.

## Tips for Safe Removal

- Never forcefully pull off press-on nails.
- Soak your nails longer if the adhesive remains strong.
- Use cuticle oil to help loosen stubborn glue.
- Avoid metal tools that may scratch or damage the natural nail.
- Give your nails a short break before applying a new set of press-on nails.

## Common Mistakes to Avoid

- Peeling off press-on nails without soaking them first.
- Using excessive force during removal.
- Skipping moisturizing products after removal.
- Removing nails too quickly, which can cause nail thinning or breakage.

Removing press-on nails properly is just as important as applying them correctly. By soaking your nails, loosening the adhesive with cuticle oil, and removing each nail gently, you can protect your natural nails from damage. With proper aftercare and hydration, your nails will remain healthy, strong, and ready for your next manicure.

---

**Source:**
1. Glamnetic – [How to Remove Press-On Nails Safely](https://www.glamnetic.com/)
`.trim(),

		body_id: `
Press-on nails merupakan solusi praktis untuk mendapatkan tampilan kuku yang cantik tanpa harus pergi ke salon. Namun, melepas press-on nails dengan cara yang tidak tepat dapat merusak kuku asli dan menyebabkan iritasi pada area kutikula. Oleh karena itu, penting untuk mengikuti langkah-langkah yang benar agar kuku tetap sehat dan terawat setelah penggunaan. Dengan teknik yang tepat, press-on nails dapat dilepas dengan mudah tanpa menimbulkan kerusakan pada kuku alami.

Sebelum melepas press-on nails, siapkan beberapa perlengkapan berikut:

- Mangkuk berisi air hangat
- Sabun cair
- Minyak kutikula atau baby oil
- Cuticle stick (stik kutikula kayu)
- Handuk bersih
- Nail buffer (opsional)
- Pelembap tangan atau hand cream

## Langkah 1: Rendam Kuku dalam Air Hangat

Isi mangkuk dengan air hangat dan tambahkan sedikit sabun cair. Rendam ujung jari selama sekitar 10–15 menit. Air hangat akan membantu melunakkan lem sehingga press-on nails lebih mudah dilepas tanpa merusak kuku asli.

![Merendam kuku dalam air hangat](/img/background.JPG)

## Langkah 2: Aplikasikan Minyak Kutikula

Setelah proses perendaman, oleskan minyak kutikula atau baby oil di sekitar tepi kuku. Biarkan beberapa menit agar minyak dapat meresap ke bawah press-on nails dan membantu melonggarkan daya rekat lem.

## Langkah 3: Angkat Tepi Press-On Nails Secara Perlahan

Gunakan cuticle stick untuk mengangkat bagian tepi press-on nails dengan hati-hati. Mulailah dari sisi kuku dan lakukan secara perlahan. Jika kuku masih terasa menempel kuat, jangan memaksanya. Rendam kembali kuku selama beberapa menit hingga lem semakin lunak.

## Langkah 4: Lepaskan Press-On Nails

Setelah lem mulai terlepas, geser cuticle stick secara perlahan ke bawah press-on nails dan angkat kuku dengan lembut. Ulangi proses ini pada setiap jari hingga seluruh press-on nails berhasil dilepas.

## Langkah 5: Bersihkan Sisa Lem

Setelah semua press-on nails terlepas, mungkin masih terdapat sisa lem pada permukaan kuku. Gunakan nail buffer secara lembut atau cairan penghapus lem khusus kuku untuk membersihkan residu yang tersisa. Hindari menggosok terlalu keras agar kuku tidak menjadi tipis atau rapuh.

## Langkah 6: Berikan Perawatan Setelah Pelepasan

Aplikasikan minyak kutikula dan pelembap tangan setelah proses pelepasan selesai. Langkah ini membantu mengembalikan kelembapan pada kuku dan kulit di sekitarnya sehingga tetap sehat dan tidak kering.

## Tips Melepas Press-On Nails dengan Aman

- Jangan menarik atau mengelupas press-on nails secara paksa.
- Rendam kuku lebih lama jika lem masih menempel kuat.
- Gunakan minyak kutikula untuk membantu melonggarkan perekat.
- Hindari penggunaan alat logam yang dapat menggores permukaan kuku.
- Berikan waktu istirahat pada kuku sebelum memasang set press-on nails yang baru.

## Kesalahan yang Harus Dihindari

- Melepas press-on nails tanpa merendam kuku terlebih dahulu.
- Menggunakan tenaga berlebihan saat mengangkat kuku.
- Mengabaikan penggunaan pelembap setelah pelepasan.
- Mengikis permukaan kuku terlalu sering untuk menghilangkan sisa lem.

Melepas press-on nails dengan benar merupakan langkah penting untuk menjaga kesehatan kuku alami. Dengan merendam kuku dalam air hangat, menggunakan minyak kutikula, dan melepaskan kuku secara perlahan, Anda dapat menghindari kerusakan yang tidak diinginkan. Perawatan setelah pelepasan juga membantu menjaga kuku tetap kuat, sehat, dan siap untuk penggunaan press-on nails berikutnya.
`.trim(),
	},
];
