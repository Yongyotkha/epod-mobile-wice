# ข้อมูลการลงนามแอป Android (Keystore & Signing Info)

ไฟล์นี้เก็บข้อมูลสำคัญเกี่ยวกับการลงนามแอปสำหรับอัปโหลดขึ้น Google Play Store เพื่อป้องกันการสูญหายหรือลืมในอนาคต

## 🔑 ข้อมูลคีย์ปัจจุบัน (ใช้งานล่าสุดสำเร็จเมื่อ 29 มิถุนายน 2569)

* **Keystore File:** `my-release-key.keystore` (อยู่ที่ Root Directory ของโปรเจกต์)
* **Store Password:** `123456`
* **Key Alias:** `my-key-alias`
* **Key Password:** `123456`
* **SHA1 Fingerprint (Play Store ต้องการ):** `FD:DD:99:E9:B8:08:53:94:2C:47:50:69:A6:65:18:1D:AE:EE:59:0E`

---

## ⚙️ การตั้งค่าในไฟล์ `android/keystore.properties`
```ini
storeFile=../../my-release-key.keystore
storePassword=123456
keyAlias=my-key-alias
keyPassword=123456
```

---

## ⚠️ คีย์อื่นที่ผิด (ห้ามนำมาใช้กับ App Bundle ชุดนี้)
* `new-release-key.keystore` (รหัสผ่าน `Wice1234` / SHA1: `F3:84:EF...`) -> **ห้ามใช้** เนื่องจากลายนิ้วมือไม่ตรงกับที่ Google Play บันทึกไว้
