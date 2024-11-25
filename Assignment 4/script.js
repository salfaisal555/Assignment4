// Tampilkan form ketika tombol Edit diklik dan isi form dengan data yang ada di profil
document.getElementById('editBtn').addEventListener('click', function() {
    // Ambil nilai dari profil yang sedang tampil dan masukkan ke dalam form
    document.getElementById('inputName').value = localStorage.getItem('profileName') || 'Nama Anda';
    document.getElementById('inputRole').value = localStorage.getItem('profileRole') || 'Front End Designer';
    document.getElementById('inputAvailability').value = localStorage.getItem('profileAvailability') || 'Full Time';
    document.getElementById('inputAge').value = localStorage.getItem('profileAge') || '0';
    document.getElementById('inputLocation').value = localStorage.getItem('profileLocation') || 'Unknown';
    document.getElementById('inputYOE').value = localStorage.getItem('profileYOE') || '0';
    document.getElementById('inputEmail').value = localStorage.getItem('profileEmail') || 'email@gmail.com';
  });
  
  // Simpan data dari form ke localStorage saat form di-submit
  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman refresh
  
    // Ambil nilai dari form
    var name = document.getElementById('inputName').value;
    var role = document.getElementById('inputRole').value;
    var availability = document.getElementById('inputAvailability').value;
    var age = document.getElementById('inputAge').value;
    var location = document.getElementById('inputLocation').value;
    var yoe = document.getElementById('inputYOE').value;
    var email = document.getElementById('inputEmail').value;
  
    // Simpan data ke localStorage
    localStorage.setItem('profileName', name);
    localStorage.setItem('profileRole', role);
    localStorage.setItem('profileAvailability', availability);
    localStorage.setItem('profileAge', age);
    localStorage.setItem('profileLocation', location);
    localStorage.setItem('profileYOE', yoe);
    localStorage.setItem('profileEmail', email);
  
    // Update profil di halaman
    updateProfile();
  
    // Tampilkan alert setelah data berhasil disimpan
    alert('Profil berhasil diperbarui!');
  
    // Sembunyikan modal setelah submit
    var myModalEl = document.getElementById('editModal');
    var modalInstance = bootstrap.Modal.getInstance(myModalEl);
    if (modalInstance) {
      modalInstance.hide();
    }
  });
  
  // Fungsi untuk memuat data dari localStorage dan menampilkannya ke halaman profil
  function updateProfile() {
    document.getElementById('name').textContent = localStorage.getItem('profileName') || 'Nama Anda';
    document.getElementById('role').textContent = localStorage.getItem('profileRole') || 'Front End Designer';
    document.getElementById('availability').textContent = localStorage.getItem('profileAvailability') || 'Full Time';
    document.getElementById('age').textContent = localStorage.getItem('profileAge') || '0';
    document.getElementById('location').textContent = localStorage.getItem('profileLocation') || 'Unknown';
    document.getElementById('yoe').textContent = localStorage.getItem('profileYOE') || '0';
    document.getElementById('email').textContent = localStorage.getItem('profileEmail') || 'email@gmail.com';
  }
  
  // Panggil fungsi updateProfile saat halaman dimuat
  window.onload = function() {
    updateProfile();
  };
  