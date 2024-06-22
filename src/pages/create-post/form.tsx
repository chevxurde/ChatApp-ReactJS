import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../../App.css';
import { useNavigate } from 'react-router-dom';


interface CreateFormData{
    title: string;
    description: string;
}

export const CreateForm = ()=> {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const schema = yup.object().shape({
        title: yup.string().required("You must input the title."),
        description: yup.string().required("You must input the description."),
    })

    const { register, handleSubmit, formState: { errors }} = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    })

    const postsRef = collection(db, "posts");

    const onCreatePost = async (data: CreateFormData)=> {
        // console.log(data);
        await addDoc(postsRef, {
            // title: data.title,
            // describe: data.description,
            ...data,
            username: user?.displayName,
            userId: user?.uid,
        });
        navigate('/');
    }
    return (
        <div className="create-post">
            <form onSubmit={handleSubmit(onCreatePost)}>
                <input placeholder='Title...' {...register("title")}/>
                <p style={{color: "red", fontSize: 12}}>{errors.title?.message}</p>
                <textarea placeholder='Description...' {...register("description")}/>
                <p style={{color: "red", fontSize: 12}}>{errors.description?.message}</p>
                <input type="submit" className='submitForm'/>
            </form>
        </div>
    );
}