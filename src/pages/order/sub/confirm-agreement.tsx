
import ViewConfirm from '@/component/common/view-confirm'

definePageConfig({
  navigationBarTitleText: '预约协议',
})

function ConfirmAgreement () {
  const h5 = '<div style="font-size: 16px;"><div style="text-align: center; font-size: 16px;"><img src="http://www.moa.gov.cn/xw/zwdt/202403/W020240320389386389245.jpg" style="border-width: 0px; font-size: 16px;" alt="" oldsrc="W020240320389386389245.jpg" class=" _47ce0875420b2dbacfc5535f94e68433"></div><div style="font-size: 16px;">　　本网讯<span style="font-family: &quot;--系统字体--&quot;; text-align: justify; font-size: 16px; margin-top: 5px; margin-bottom: 5px; line-height: 2;">　</span><span style="font-family: &quot;--系统字体--&quot;; text-align: justify; font-size: 16px;">3月20日，农业农村部召开2024年部系统计划财务工作会议，部党组成员李敬辉出席会议并讲话。会议强调，要坚持以习近平新时代中国特色社会主义思想为指导，紧紧围绕三农重点任务，高质量做好2024年计划财务管理工作。</span></div><div style="font-family: &quot;--系统字体--&quot;; text-align: justify; font-size: 16px;">　　会议指出，2023年，各司局单位积极扩大农业农村有效投资，谋划推动出台了一批重大支农惠农政策，提升了服务全局支撑保障能力，强化了预算执行、财会审计监督和绩效管理，培育了一批高素质财务专业人才，为三农发展提供了有力支撑保障。</div><div style="font-family: &quot;--系统字体--&quot;; text-align: justify; font-size: 16px;">　　会议要求，2024年部系统计划财务工作要坚持从严从紧、习惯“过紧日子”，坚持统筹协同、保障“国之大者”，坚持目标导向、加快补齐短板弱项，坚持底线思维、防范系统风险。要持续强化预算执行和财会审计监督，加强政策统筹和资金监管，把用好管好涉农资金作为当前和今后一个时期计划财务管理工作的重点任务抓好抓实。</div><div style="font-family: &quot;--系统字体--&quot;; text-align: justify; font-size: 16px;">　　部机关司局、派出机构、部属事业单位有关负责同志参加会议。审计署农业水利审计局有关同志应邀出席会议。</div></div>'
  return <ViewConfirm content={h5} onConfirm={()=>{
    console.log('confirm');
  }}></ViewConfirm>
}

export default ConfirmAgreement
