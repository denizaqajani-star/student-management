const students = [];


// 1. Öğrenci Ekle
const addStudent = () => {
  const name = prompt("Öğrencinin adını giriniz:");
  if (name === null) return;
  if (name.trim() === "") {
    alert("Öğrenci adı boş olamaz!");
    return;
  }

  students.push({
  id: students[students.length - 1]?.id
    ? students[students.length - 1].id + 1
    : 1,
  name: name.trim()
});

  alert("Öğrenci başarıyla eklendi!");
};

// 2. Öğrencileri Listele
const listStudents = () => {
  if (students.length === 0) {
    alert("Henüz öğrenci bulunmuyor.");
    return;
  }
  const list = students
    .map((student) => `ID: ${student.id} - Ad: ${student.name}`)
    .join("\n");
  alert(list);
};

// 3. Öğrenci Sil
const deleteStudent = () => {
  if (students.length === 0) {
    alert("Silinecek öğrenci bulunmuyor.");
    return;
  }
  const list = students
    .map((student) => `ID: ${student.id} - Ad: ${student.name}`)
    .join("\n");
  const input = prompt(
    "Öğrenciler:\n" + list +
    "\n\nSilmek istediğiniz öğrencinin ID'sini giriniz:"
  );
  if (input === null) return;
  if (input.trim() === "") {
    alert("ID boş olamaz!");
    return;
  }
  const id = Number(input);
  if (!Number.isInteger(id) || id <= 0) {
    alert("Geçerli bir ID giriniz!");
    return;
  }
  const index = students.findIndex((student) => student.id === id);
  if (index === -1) {
    alert("Bu ID'ye sahip öğrenci bulunamadı!");
    return;
  }
  const deleted = students.splice(index, 1);
  alert(`${deleted[0].name} başarıyla silindi!`);
};

// 4. Menü ve Uygulamadan Çık
const menu = () => {
  while (true) {
    const choice = prompt(
      "ÖĞRENCİ YÖNETİM SİSTEMİ\n\n" +
      "1 - Öğrenci Ekle\n" +
      "2 - Öğrencileri Listele\n" +
      "3 - Öğrenci Sil\n" +
      "4 - Uygulamadan Çık\n\n" +
      "Seçiminizi giriniz:"
    );
    if (choice === null || choice === "4") {
      alert("Uygulamadan çıkılıyor...");
      return;
    }
    if (choice === "1") addStudent();
    else if (choice === "2") listStudents();
    else if (choice === "3") deleteStudent();
    else alert("Geçersiz seçim! 1, 2, 3 veya 4 giriniz.");
  }
};

// Menü, kullanıcı düğmeye bastığında başlar.
document.getElementById("startButton").addEventListener("click", menu);