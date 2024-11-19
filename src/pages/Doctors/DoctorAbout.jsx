import { formatDate } from '../../utils/formatDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About of
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                TTUT.TS.BS Vũ Trường Khanh
                </span>
            </h3>
            <p className="text__para">Với gần 25 năm công tác trong ngành Y, TTƯT.TS.BS Vũ Trường Khanh được biết đến là một trong những chuyên gia hàng đầu tại Việt Nam trong lĩnh vực Tiêu hóa – Gan Mật – Tụy. Sau khi tốt nghiệp bác sĩ đa khoa tại Trường Đại học Y Thái Bình. BS Vũ Trường Khanh tiếp tục tham gia khóa đào tạo Nội soi Tiêu hóa tại Tokyo, Nhật Bản để trau dồi chuyên môn nhằm phục vụ tốt hơn nữa cho việc khám chữa bệnh. Trở về Việt Nam, bác sĩ Vũ Trường Khanh có nhiều cơ hội thăm khám, chẩn đoán cho người bệnh, đồng thời không ngừng tự học tập, cập nhật kiến thức y khoa để phục vụ việc chẩn đoán và điều trị các bệnh lý Tiêu hóa – Gan Mật – Tụy cho người bệnh. Ông cũng từng là trưởng khoa Tiêu hóa trước kia và là Giám đốc của Trung tâm Tiêu hóa – 
                Hiện tại, với kinh nghiệm nhiều năm thăm khám và điều trị cho người bệnh, trên cương vị là Trưởng khoa Tiêu hóa – Gan Mật – Tụy, BVĐK Tâm Anh Hà Nội BS Vũ Trường Khanh luôn đặt mục tiêu cải thiện sức khỏe cho những người mà ông khám và điều trị bệnh cũng như cộng đồng.
            </p>

        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Education
            </h3>

            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                            {formatDate('12-10-2009')} - {formatDate('12-10-2012')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PhD in Surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Apollo Hospital, New York.
                    </p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formatDate('09-11-2012')} - {formatDate('12-10-2013')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PhD in Surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Apollo Hospital, New York.
                    </p>
                </li>
            </ul>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Experience 
            </h3>

            <ul className='grip sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                        {formatDate("07-04-2010")}-{formatDate("07-04-2014")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Sr. Surgeon
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                            New Apollo Hospital, New York.
                    </p>
                </li>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                        {formatDate("07-04-2010")}-{formatDate("07-04-2014")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Sr. Surgeon
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                    Phó chủ nhiệm bộ môn Nội Tổng hợp, Đại học Y Hà Nội
                   
                    </p>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default DoctorAbout
