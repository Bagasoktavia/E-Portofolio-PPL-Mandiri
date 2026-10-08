/* DATA E-PORTFOLIO
   Berkas ini menyimpan daftar foto, video, dan data tabel. Untuk mengganti foto atau menambah video, cukup ubah berkas ini.

   MENAMBAH FOTO
   1. Unggah foto ke folder "foto" di GitHub.
   2. Tulis nama berkasnya pada daftar IMG di bawah, misalnya:  baru:'foto/nama-foto.jpg',
   3. Tambahkan P('baru','Keterangan foto') pada galeri yang diinginkan (vfoto, media, non, atau dok).

   MENAMBAH VIDEO (disarankan lewat YouTube, atur sebagai "Tidak publik")
   Pada baris video:[ ] tulis:  {t:'video',s:'https://www.youtube.com/embed/KODE_VIDEO',c:'Video praktik mengajar mandiri'}
   KODE_VIDEO adalah huruf-angka setelah "v=" pada alamat video YouTube.
   Video dari folder sendiri juga bisa, mis.  s:'video/praktik.mp4'  (maksimal 25 MB per berkas saat diunggah lewat browser). */
const IMG={pas:'foto/pas-foto.jpg',ws:'foto/pengarahan-bengkel.jpg',cls:'foto/ruang-pembelajaran.jpg',lathe:'foto/praktik-bubut.jpg',grind:'foto/praktik-gerinda.jpg',visit:'foto/foto-bersama.jpg',haida:'foto/kunjungan-haida.jpg',gate:'foto/piket-5s.jpg'};
const PAGES=Array.from({length:23},(_,i)=>'berkas/halaman/modul-'+String(i+1).padStart(2,'0')+'.jpg');
const P=(k,c)=>({t:'foto',s:IMG[k],c});
const MEDIA={
video:[], /* video praktik mengajar: lihat petunjuk di atas */
pas:[{t:'foto',s:IMG.pas,c:''}],
vfoto:[P('ws','Pengarahan kepada peserta didik di bengkel'),P('cls','Peserta didik di ruang pembelajaran'),P('lathe','Pendampingan praktik di bengkel')],
media:[P('lathe','Mesin bubut dan poster keselamatan kerja'),P('grind','Mesin gerinda duduk untuk praktik')],
non:[P('haida','Kunjungan industri di PT Haida Agriculture'),P('gate','Piket 5S di gerbang sekolah')],
dok:[P('ws','Pengarahan di bengkel'),P('cls','Suasana pembelajaran'),P('lathe','Praktik mesin bubut'),P('grind','Praktik mesin gerinda'),P('visit','Foto bersama'),P('haida','Kunjungan industri di PT Haida Agriculture'),P('gate','Piket 5S')]};
const TP=[
['3.2','1-2',10,'Persiapan pekerjaan frais (lanjutan)','Pencekaman presisi dengan dial indicator, alat bantu pencekaman (klem set, V-block, parallel block)','Praktik pemasangan alat bantu'],
['3.3','3-5',15,'Perhitungan waktu teknik pemesinan frais','Waktu pemesinan single pass (tm = Lt/Vf), multi-pass, proyek mini waktu produksi','Lembar perhitungan dan presentasi kelompok'],
['3.4','6-8',15,'Pengaturan benda kerja sesuai kepresisian','Toleransi dan suaian, setting dengan dial indicator dan height gauge, praktik mandiri','Unjuk kerja individu, lalu PTS'],
['3.5','9-12',20,'Pengefraisan pekerjaan tertentu','Alur (slot/pasak), bidang bertingkat, bidang miring (champer)','Unjuk kerja dan produk'],
['3.6','13-16',20,'Pengefraisan dengan alat bantu','Kepala pembagi, simple indexing n = 40/N, segi beraturan, pengantar roda gigi','Produk dan unjuk kerja'],
['3.7','17-19',15,'Pengefraisan benda sederhana','Routing sheet, produksi tahap 1 dan 2, finishing','Produk akhir dan portofolio proses'],
['3.8','20-22',15,'Pengefraisan benda rakitan kompleks','Perencanaan kelompok, produksi komponen, perakitan, uji fungsi, presentasi','Rubrik proyek, lalu PAS']];
const S=[['beranda','Beranda'],['profil','Profil PPL'],['eporto','E-Portfolio 1'],['perencanaan','Perencanaan Pembelajaran'],['materi','Materi Pembelajaran'],['media','Media Pembelajaran'],['praktik','Praktik Mengajar'],['nonmengajar','Kegiatan Nonmengajar'],['instrumen','Instrumen Penilaian'],['artefak','Artefak'],['dokumentasi','Dokumentasi'],['refleksi','Refleksi']];
