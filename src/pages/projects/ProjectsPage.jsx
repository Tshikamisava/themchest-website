import { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';

import img2 from '../../assets/project/img2.jpeg';
import img3 from '../../assets/project/img3.jpeg';
import img4 from '../../assets/project/img4.jpeg';
import img5 from '../../assets/project/img5.jpeg';
import img6 from '../../assets/project/img6.jpeg';
import img7 from '../../assets/project/img7.jpeg';
import img8 from '../../assets/project/img8.jpeg';
import img9 from '../../assets/project/img9.jpeg';
import img10 from '../../assets/project/img10.jpeg';
import img11 from '../../assets/project/img11.jpeg';
import img12 from '../../assets/project/img12.jpeg';
import img13 from '../../assets/project/img13.jpeg';
// import img2 from '../../assets/project/img3.jpeg';
// import img2 from '../../assets/project/img3.jpeg';
// import img2 from '../../assets/project/img3.jpeg';
// import img2 from '../../assets/project/img3.jpeg';
// import img2 from '../../assets/project/img3.jpeg';

// Removed Firebase imports and setup

const ProjectsPage = () => {
    const [noOfElements, setNoOfElements] = useState(6);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const loadMore = () => {
        if (noOfElements <= projects.length) {
            setNoOfElements(noOfElements + noOfElements);
        } else {
            setNoOfElements(projects.length);
        }
    };

    const sliceArr = projects.slice(0, noOfElements);

    useEffect(() => {
        // Removed Firebase related code for fetching projects

        // Simulated data fetching
        const simulatedData = [
            {
                id: 1,
                images: [{ url: img2 }],
                projectName: "Project 1",
                projectSummary: "Summary for Project 1"
            },

            {
                id: 1,
                images: [{ url: img3 }],
                projectName: "Project 1",
                projectSummary: "Summary for Project 1"
            },
            {
                id: 1,
                images: [{ url: img4 }],
                projectName: "Project 1",
                projectSummary: "Summary for Project 1"
            },
            {
                id: 1,
                images: [{ url: img5 }],
                projectName: "Project 1",
                projectSummary: "Summary for Project 1"
            },
            {
                id: 1,
                images: [{ url: img6 }],
                projectName: "Project 1",
                projectSummary: "Summary for Project 1"
            },
            {
                id: 1,
                images: [{ url: img7 }],
                projectName: "Project 1",
                projectSummary: "Summary for Project 1"
            },
            {
                id: 1,
                images: [{ url: img8 }],
                projectName: "Project 1",
                projectSummary: "Summary for Project 1"
            },
            {
                id: 1,
                images: [{ url: img9 }],
                projectName: "Project 1",
                projectSummary: "Summary for Project 1"
            },
            {
                id: 1,
                images: [{ url: img10 }],
                projectName: "Project 1",
                projectSummary: "Summary for Project 1"
            },
            {
                id: 1,
                images: [{ url: img11 }],
                projectName: "Project 1",
                projectSummary: "Summary for Project 1"
            },
            {
                id: 1,
                images: [{ url: img12 }],
                projectName: "Project 1",
                projectSummary: "Summary for Project 1"
            },
            {
                id: 1,
                images: [{ url: img13 }],
                projectName: "Project 1",
                projectSummary: "Summary for Project 1"
            },
            // Add more simulated data as needed
        ];

        // Simulating asynchronous data loading
        setTimeout(() => {
            setProjects(simulatedData);
            setLoading(false);
        }, 2000);

    }, []);

    return (
        <div>
            <div className="flex justify-center items-center flex-col px-4 md:px-6 xl:px py-9 md:py-12 xl:py-16 text-onSurface">
                <section>
                    <h1 className="leading-5 md:leading-6 xl:leading-9 text-gray-800 text-xl md:text-2xl xl:text-4xl font-semibold text-center uppercase">
                        Projects
                    </h1>
                    <p className="text-gray-600 text-base text-center mt-4">
                        We deliver your desire. Trusted for many years.
                    </p>
                </section>

                {
                    loading ? <PropagateLoader
                        color="#d9a527"
                        loading={loading}
                        cssOverride={{
                            marginTop: '50px',
                            textAlign: 'center'
                        }}
                        size={10}
                    /> : (
                        <div>
                            <section
                                className="grid grid-cols-1 xl:grid-cols-3 gap-1 md:gap-2 xl:gap-8 mt-8 md:mt-10 xl:mt-12 mb-8">
                                {
                                    projects.length !== 0 &&
                                    sliceArr.map((project) => (
                                        <div className="relative group" key={project.id}>
                                            <img className="w-[500px] h-[250px] object-cover"
                                                src={project.images[0].url || img2}
                                                alt="Living Room"
                                            />
                                            <div
                                                className="opacity-0 bg-gradient-to-t from-white via-white to-opacity-10 group-hover:opacity-20 absolute top-0 left-0 h-full w-full" />
                                            <div
                                                className="absolute top-0 left-0 w-full h-full flex justify-start items-start opacity-100 p-8 group-hover:bg-surface group-hover:bg-opacity-50">
                                                <p className="font-semibold text-2xl leading-6 text-white">
                                                    {project.projectName}
                                                </p>
                                            </div>
                                            <div
                                                className="flex flex-col top-20 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                                                <p className="font-light text-xl leading-6 text-white">
                                                    {project.projectSummary}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </section>
                            {
                                projects.length !== noOfElements && (<section className="flex justify-center">
                                    <div
                                        className="cursor-pointer px-6 h-11 text-gray-800 text-base font-medium flex items-center border border-gray-600 hover:bg-gray-200">
                                        <div onClick={() => loadMore()}
                                            className="flex flex-row flex-nowrap items-center">Explore {/*BsArrowRight*/}<span className="ml-2">{'>'}</span></div>
                                    </div>
                                </section>)
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ProjectsPage;
