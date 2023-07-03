import "dotenv/config";
import express from 'express';

import multer from "multer";
import errorHandler from "./middlewares/error-handling";
import adminRoutes from "./routes/admin.routes";
import carRoutes from "./routes/car.routes";

const port = process.env.PORT || 3000

const fileStorage = multer.diskStorage({
	destination: (
		req: express.Request,
		file: Express.Multer.File,
		cb: (error: Error | null, destination: string) => void
	) => {
		cb(null, 'images');
	},
	filename: (
		req: express.Request,
		file: Express.Multer.File,
		cb: (error: Error | null, filename: string) => void
	) => {
		cb(null, new Date().toISOString() + '-' + file.originalname);
	},
});

const fileFilter = (
	req: express.Request,
	file: Express.Multer.File,
	cb: (error: Error | null, acceptFile: boolean) => void
) => {
	if (
		file.mimetype === 'image/png' ||
		file.mimetype === 'image/jpg' ||
		file.mimetype === 'image/jpeg'
	) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};


const app = express();

app.use(express.json());
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));

app.use(carRoutes)
app.use('/admin', adminRoutes)

app.use(errorHandler)

app.listen(port, () => console.log('server listening on port ' + port));

