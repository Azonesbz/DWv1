import multer from 'multer'

export const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
      cb(null, req.session.sessId + '.jpg')
    }
});

export const upload = multer({ 
    dest: 'uploads/',
    storage: storage,
    fileFilter: function(req, file, cb) {
        if (file.size > 5 * 1024 * 1024) {
          return cb(new Error('Le fichier ne doit pas dépasser 5 Mo'));
        }
        cb(null, true);
      }
}); 

export async function uploadFile(req, res) {
    res.redirect('/profil');
};