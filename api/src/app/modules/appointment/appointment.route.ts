import express from 'express';
import { auth } from '../../middlewares/auth';
import { AuthUser } from '../../../enums';
import { AppointmentController } from './appointment.controller';

const router = express.Router();

router.get('/', AppointmentController.getAllAppointment);

router.get('/patient/appointments',auth(AuthUser.PATIENT), AppointmentController.getPatientAppointmentById);
router.get('/doctor/appointments',auth(AuthUser.DOCTOR), AppointmentController.getDoctorAppointmentsById);
router.get('/doctor/patients',auth(AuthUser.DOCTOR), AppointmentController.getDoctorPatients);

router.post('/create',auth(AuthUser.PATIENT), AppointmentController.createAppointment);

router.get('/:id', AppointmentController.getAppointment);

router.delete('/:id', AppointmentController.deleteAppointment);
router.patch('/:id', auth(AuthUser.ADMIN, AuthUser.DOCTOR, AuthUser.PATIENT),AppointmentController.updateAppointment);
//doctor side
router.patch('/doctor/update-appointment',auth(AuthUser.DOCTOR), AppointmentController.updateAppointmentByDoctor);


export const AppointmentRouter = router;