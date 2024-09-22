const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer({
	limits: { fileSize: 10 * 1024 * 1024 },
});

router.post("/", upload.single("file_b64"), (req, res) => {
	const { data, file_b64 } = req.body;

	if (!data) {
		return res
			.status(400)
			.json({ is_success: false, message: "Data array is required" });
	}

	const numbers = data.filter((item) => !isNaN(item));
	const alphabets = data.filter((item) => isNaN(item));

	const lowerCaseAlphabets = alphabets.filter((ch) => ch === ch.toLowerCase());
	const highestLowercase =
		lowerCaseAlphabets.length > 0 ? [lowerCaseAlphabets.sort().pop()] : [];

	let fileValid = false;
	let fileMimeType = null;
	let fileSizeKb = null;

	if (req.file) {
		fileValid = true;
		fileMimeType = req.file.mimetype;
		fileSizeKb = req.file.size / 1024;
	}

	const response = {
		is_success: true,
		user_id: "Yash_Goyal_11052004", 
		email: "yg9532@srmist.edu.in", 
		roll_number: "RA2111003011730",
		numbers,
		alphabets,
		highest_lowercase_alphabet: highestLowercase,
		file_valid: fileValid,
		file_mime_type: fileMimeType,
		file_size_kb: fileSizeKb,
	};

	return res.status(200).json(response);
});

router.get("/", (req, res) => {
	return res.status(200).json({ operation_code: 1 });
});

module.exports = router;
