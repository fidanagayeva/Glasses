import React from 'react';

const BestMaterials = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mt-[3rem] mb-[7rem] px-4 md:px-12 gap-y-8 md:gap-x-8">
            <div className="flex items-center text-left">
                <img src="https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-best-materials.svg" alt="" className="mr-4 mb-0" />
                <div>
                    <h3 className="text-lg font-normal">Best Materials</h3>
                    <p className="text-sm text-gray-500">Condimentum a rhoncus.</p>
                </div>
            </div>
            <div className="flex items-center text-left">
                <img src="https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-carl-zies.svg" alt="" className="mr-4 mb-0" />
                <div>
                    <h3 className="text-lg font-normal">Carl Zeiss Lenses</h3>
                    <p className="text-sm text-gray-500">Tellus aliquet eget imperdiet.</p>
                </div>
            </div>
            <div className="flex items-center text-left">
                <img src="https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-modern-design.svg" alt="" className="mr-4 mb-0" />
                <div>
                    <h3 className="text-lg font-normal">Modern Design</h3>
                    <p className="text-sm text-gray-500">Condimentum tempus tristique.</p>
                </div>
            </div>
            <div className="flex items-center text-left">
                <img src="https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-all-sizes.svg" alt="" className="mr-4 mb-0" />
                <div>
                    <h3 className="text-lg font-normal">All Sizes</h3>
                    <p className="text-sm text-gray-500">Taciti nam scelerisque nunc.</p>
                </div>
            </div>
        </div>
    );
}

export default BestMaterials;
