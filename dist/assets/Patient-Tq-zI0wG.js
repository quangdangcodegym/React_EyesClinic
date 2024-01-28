import{r,j as e,m as A}from"./index-PgkcB_MP.js";import{m as E}from"./medicinePrescriptionService-9qaIjgXA.js";import{u as D,M as u}from"./Modal-IhNkCfO3.js";import{c as H}from"./index-OFSkRISh.js";import{c as M}from"./customerService-_QoQn0mo.js";import{P as V}from"./pagination-1_X_7A8j.js";import"./setPrototypeOf-ahVgEFUp.js";import"./index-IH9Nk7iR.js";const z=["as","disabled"];function O(d,n){if(d==null)return{};var t={},s=Object.keys(d),i,a;for(a=0;a<s.length;a++)i=s[a],!(n.indexOf(i)>=0)&&(t[i]=d[i]);return t}function G(d){return!d||d.trim()==="#"}function T({tagName:d,disabled:n,href:t,target:s,rel:i,role:a,onClick:h,tabIndex:x=0,type:b}){d||(t!=null||s!=null||i!=null?d="a":d="button");const o={tagName:d};if(d==="button")return[{type:b||"button",disabled:n},o];const N=l=>{if((n||d==="a"&&G(t))&&l.preventDefault(),n){l.stopPropagation();return}h==null||h(l)},j=l=>{l.key===" "&&(l.preventDefault(),N(l))};return d==="a"&&(t||(t="#"),n&&(t=void 0)),[{role:a??"button",disabled:void 0,tabIndex:n?void 0:x,href:t,target:d==="a"?s:void 0,"aria-disabled":n||void 0,rel:d==="a"?i:void 0,onClick:N,onKeyDown:j},o]}const K=r.forwardRef((d,n)=>{let{as:t,disabled:s}=d,i=O(d,z);const[a,{tagName:h}]=T(Object.assign({tagName:t,disabled:s},i));return e.jsx(h,Object.assign({},i,a,{ref:n}))});K.displayName="Button";const F=r.forwardRef(({as:d,bsPrefix:n,variant:t="primary",size:s,active:i=!1,disabled:a=!1,className:h,...x},b)=>{const o=D(n,"btn"),[N,{tagName:j}]=T({tagName:d,disabled:a,...x}),l=j;return e.jsx(l,{...N,...x,ref:b,disabled:a,className:H(h,o,i&&"active",t&&`${o}-${t}`,s&&`${o}-${s}`,x.href&&a&&"disabled")})});F.displayName="Button";const I=F,R=({showModal:d,closeModal:n,booking:t})=>{var h,x,b,o,N,j;const[s,i]=r.useState(null),a=async l=>{const f=await E.getPrescriptionByIdBooking(l),y=await E.getShowDetailPrescription(f);i(y)};return r.useEffect(()=>{d&&a(t==null?void 0:t.id)},[d]),r.useEffect(()=>{t||i(null)},[t]),e.jsxs(u,{show:d,onHide:n,size:"lg",centered:!0,className:"bg-dark bg-opacity-50",children:[e.jsx(u.Header,{closeButton:!0,children:e.jsx(u.Title,{className:"ms-4",children:"Lịch sử khám bệnh"})}),e.jsx(u.Body,{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"card mb-0",children:[e.jsx("div",{className:"card-body pb-0",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-8",children:e.jsx("div",{className:"card",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"row d-flex",children:[e.jsx("p",{className:"card-subtitle fw-bolder mb-2 text-muted col-6",children:"Ngày giờ khám:"}),e.jsxs("div",{className:"col-6 mb-2",children:[e.jsx("h6",{className:"fw-semibold mb-1",children:t==null?void 0:t.dateBooking}),e.jsx("span",{className:"fw-normal",children:t==null?void 0:t.timeBooking})]})]}),e.jsxs("div",{className:"row d-flex mb-2 align-items-center",children:[e.jsx("p",{className:"card-subtitle fw-bolder mb-2 text-muted col-6",children:"Dịch vụ:"}),e.jsx("p",{className:"card-text col-6",children:(h=t==null?void 0:t.eyeCategory)==null?void 0:h.nameCategory})]}),e.jsxs("div",{className:"row d-flex mb-2 align-items-start",children:[e.jsx("p",{className:"card-subtitle fw-bolder mb-2 text-muted col-6",children:"Chẩn đoán:"}),e.jsx("p",{className:"card-text col-6",children:s==null?void 0:s.diagnose})]}),e.jsxs("div",{className:"row d-flex mb-2 align-items-start",children:[e.jsx("p",{className:"card-subtitle fw-bolder mb-2 text-muted col-6",children:"Bệnh phụ:"}),e.jsxs("p",{className:"card-text col-6",children:[" ",s!=null&&s.note.split(",")[1]?s==null?void 0:s.note.split(",")[1]:"",s!=null&&s.note.split(",")[2]?", "+(s==null?void 0:s.note.split(",")[2])+", ":"",s!=null&&s.note.split(",")[3]?s==null?void 0:s.note.split(",")[3]:""]})]}),e.jsxs("div",{className:"row d-flex mb-2 align-items-start",children:[e.jsx("p",{className:"card-subtitle fw-bolder mb-2 text-muted col-6",children:"Ghi chú:"}),e.jsx("p",{className:"card-text col-6",children:(s==null?void 0:s.note.split(",")[0])||""})]}),e.jsxs("div",{className:"row d-flex align-items-center",children:[e.jsx("p",{className:"card-subtitle fw-bolder mb-2 text-muted col-6",children:"Trạng thái:"}),e.jsx("div",{className:"d-flex align-items-center gap-2 col-6",children:e.jsx("span",{className:"badge bg-success rounded-3 fw-semibold",children:t==null?void 0:t.status})})]})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-body pt-2 pb-2 ps-0 pe-0",children:e.jsx("h5",{className:"card-title text-center border-bottom border-2 border-secondary pb-2",children:"Thị lực"})}),e.jsxs("div",{className:"row d-flex align-items-center mb-1 mt-2",children:[e.jsxs("div",{className:"col-6 text-center",children:[e.jsx("i",{className:"ti ti-eye",style:{fontSize:"56px"}}),e.jsx("p",{className:"card-subtitle fw-bolder text-muted",children:"Mắt trái"})]}),e.jsx("div",{className:"col-6 text-center",children:e.jsx("p",{className:"card-subtitle fw-bolder text-muted",children:`${(x=s==null?void 0:s.eyeSight)==null?void 0:x.split(", ")[0]}/10`})})]}),e.jsxs("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[e.jsxs("div",{className:"col-6 text-center",children:[e.jsx("i",{className:"ti ti-eye",style:{fontSize:"56px"}}),e.jsx("p",{className:"card-subtitle fw-bolder text-muted",children:"Mắt phải"})]}),e.jsx("div",{className:"col-6 text-center",children:e.jsx("p",{className:"card-subtitle fw-bolder text-muted",children:`${(b=s==null?void 0:s.eyeSight)==null?void 0:b.split(", ")[1]}/10`})})]})]})})]})}),e.jsx("div",{className:"card-body pb-0 pt-0",children:e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table text-nowrap mb-0 align-middle",children:[e.jsx("thead",{className:"text-dark fs-4",children:e.jsxs("tr",{children:[e.jsx("th",{className:"border-bottom-0 text-center",children:e.jsx("h6",{className:"fw-semibold mb-0",children:"Tên thuốc"})}),e.jsx("th",{className:"border-bottom-0",children:e.jsx("h6",{className:"fw-semibold mb-0",children:"Đơn vị"})}),e.jsx("th",{className:"border-bottom-0",children:e.jsx("h6",{className:"fw-semibold mb-0",children:"Số lượng"})}),e.jsx("th",{className:"border-bottom-0",children:e.jsx("h6",{className:"fw-semibold mb-0",children:"Đơn giá"})}),e.jsx("th",{className:"border-bottom-0 text-center",children:e.jsx("h6",{className:"fw-semibold mb-0",children:"Thành tiền"})})]})}),e.jsxs("tbody",{children:[s!=null&&s.medicines&&s.medicines.length>0?s.medicines.map((l,f)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border-bottom-0",children:e.jsxs("div",{className:"d-flex justify-content-center align-items-center",style:{flexDirection:"column"},children:[e.jsx("div",{className:"fw-bolder",children:l==null?void 0:l.nameMedicine}),e.jsx("div",{style:{fontSize:"13px"},children:e.jsxs("em",{children:[" ( ",l==null?void 0:l.useMedicine," - ",l==null?void 0:l.noteMedicine," )"]})})]})}),e.jsx("td",{className:"border-bottom-0",children:e.jsx("h6",{className:"fw-semibold mb-1",children:(l==null?void 0:l.type)==="PELLET"?"Viên":"Chai"})}),e.jsx("td",{className:"border-bottom-0 text-center",children:e.jsx("h6",{className:"fw-semibold mb-1",children:l==null?void 0:l.quantity})}),e.jsx("td",{className:"border-bottom-0",children:e.jsx("h6",{className:"fw-semibold mb-1",children:(l==null?void 0:l.priceMedicine).toLocaleString("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0})})}),e.jsx("td",{class:"border-bottom-0 text-center",children:e.jsx("h6",{className:"fw-semibold mb-1",children:((l==null?void 0:l.priceMedicine)*(l==null?void 0:l.quantity)).toLocaleString("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0})})})]},f+1)):null,e.jsxs("tr",{children:[e.jsx("td",{className:"border-bottom-0 text-center",children:e.jsx("h6",{className:"fw-semibold mb-1",children:"Tên dịch vụ"})}),e.jsx("td",{colSpan:3,className:"border-bottom-0 text-center",children:e.jsx("h6",{className:"fw-normal mb-1",children:(o=t==null?void 0:t.eyeCategory)==null?void 0:o.nameCategory})}),e.jsx("td",{className:"border-bottom-0 text-center",children:e.jsx("h6",{className:"fw-semibold mb-1",children:(N=t==null?void 0:t.eyeCategory)==null?void 0:N.price.toLocaleString("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border-bottom-0 text-center",children:e.jsx("h6",{className:"fw-semibold mb-1"})}),e.jsx("td",{colSpan:3,className:"border-bottom-0 text-center",children:e.jsx("h6",{className:"fw-semibold mb-1",children:"Tổng tiền:"})}),e.jsx("td",{className:"border-bottom-0 text-center",children:e.jsx("h6",{className:"fw-semibold mb-1 text-danger",children:s?s==null?void 0:s.totalAmount.toLocaleString("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0}):"Ko có"})})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:3,className:"border-bottom-0 text-center",children:e.jsxs("div",{className:"d-flex align-items-start justify-content-center gap-4",style:{flexDirection:"column"},children:[e.jsx("div",{className:"fw-semibold mb-1",children:"Người thu tiền"}),e.jsx("div",{children:s==null?void 0:s.cashier})]})}),e.jsx("td",{colSpan:3,className:"border-bottom-0 text-center",children:e.jsxs("div",{className:"d-flex align-items-end justify-content-center gap-4",style:{flexDirection:"column"},children:[e.jsx("div",{className:"fw-semibold mb-1",children:"Bác sĩ khám bệnh"}),e.jsxs("div",{children:["BS ",(j=s==null?void 0:s.doctor)==null?void 0:j.name]})]})})]})]})]})})})]})})})}),e.jsx(u.Footer,{children:e.jsx(I,{onClick:n,className:"me-4 mt-0",children:"Close"})})]})},q=({showModal:d,closeModal:n,idCustomer:t})=>{var w,g,S;const[s,i]=r.useState(!1),[a,h]=r.useState({}),[x,b]=r.useState(0),[o,N]=r.useState([]),[j,l]=r.useState(null),f=async()=>{const c=await M.getCustomerById(t);h(c)},y=async c=>{const L=(await A.getBookingByPhone(c)).sort((B,P)=>{const $=new Date(`${B.dateBooking} ${B.timeBooking}`);return new Date(`${P.dateBooking} ${P.timeBooking}`)-$});N(L)},C=()=>{l(null),i(!1)},m=c=>{i(!0),l(c)};r.useEffect(()=>{d&&f()},[d]),r.useEffect(()=>{var c;a&&y((c=a==null?void 0:a.user)==null?void 0:c.phoneNumber)},[a]),r.useEffect(()=>{if(o[0]){const c=o.filter(p=>p.status==="COMPLETED");b(c==null?void 0:c.length)}},[o]);const v={CANCELLED:"#FA896B",PENDING:"#2A3547",WAITING:"#49BEFF",EXAMINING:"#5D87FF",UNPAID:"#FFAE1F",COMPLETED:"#13DEB9"};return e.jsx(e.Fragment,{children:e.jsxs(u,{show:d,onHide:n,size:"xl",centered:!0,children:[e.jsx(u.Header,{closeButton:!0,children:e.jsx(u.Title,{className:"ms-4",children:"Chi tiết bệnh án"})}),e.jsx(u.Body,{children:e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"container-fluid",children:[e.jsx("div",{className:"card",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("h5",{className:"card-title fw-semibold mb-4",children:"Thông tin bệnh nhân"}),e.jsx("div",{className:"card",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{children:[e.jsxs("div",{className:"row d-flex",children:[e.jsx("p",{className:"card-subtitle fw-bolder mb-2 text-muted col-6",children:"Họ và tên:"}),e.jsx("p",{className:"card-text col-6",children:(w=a==null?void 0:a.user)==null?void 0:w.fullName})]}),e.jsxs("div",{className:"row d-flex",children:[e.jsx("p",{className:"card-subtitle fw-bolder mb-2 text-muted col-6",children:"Số điện thoại:"}),e.jsx("p",{className:"card-text col-6",children:(g=a==null?void 0:a.user)==null?void 0:g.phoneNumber})]}),e.jsxs("div",{className:"row d-flex",children:[e.jsx("p",{className:"card-subtitle fw-bolder mb-2 text-muted col-6",children:"Địa chỉ:"}),e.jsx("p",{className:"card-text col-6",children:(S=a.user)==null?void 0:S.address})]}),e.jsxs("div",{className:"row d-flex",children:[e.jsx("p",{className:"card-subtitle fw-bolder mb-2 text-muted col-6",children:"Năm sinh:"}),e.jsx("p",{className:"card-text col-6",children:a==null?void 0:a.age})]})]})},a.id)})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("h5",{className:"card-title fw-semibold mb-4",children:"Hồ sơ khám bệnh"}),e.jsx("div",{className:"card",children:e.jsxs("div",{className:"card-body",children:[e.jsx("div",{className:"row d-flex",children:e.jsx("p",{className:"card-subtitle fw-bolder mb-2 text-muted col-6",children:"Số lần khám:"})}),e.jsxs("div",{className:"row d-flex align-items-center justify-content-between",children:[e.jsx("div",{className:"row mt-4 col-6",children:e.jsxs("div",{className:"",children:[e.jsx("h5",{className:"card-title",children:o.length}),e.jsx("p",{className:"card-text",children:"lượt hẹn"})]})}),e.jsx("div",{className:"row mt-4 col-6",children:e.jsxs("div",{className:"",children:[e.jsx("h5",{className:"card-title",children:x}),e.jsx("p",{className:"card-text",children:"Lượt khám"})]})})]})]})})]})]})})}),e.jsx("div",{className:"card mt-4",children:e.jsx("div",{className:"card-body",children:e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table text-nowrap mb-0 align-middle",children:[e.jsx("thead",{className:"text-dark fs-4",children:e.jsxs("tr",{children:[e.jsx("th",{className:"border-bottom-0",children:e.jsx("h6",{className:"fw-semibold mb-0",children:"Ngày giờ khám"})}),e.jsx("th",{className:"border-bottom-0",children:e.jsx("h6",{className:"fw-semibold mb-0",children:"Dịch vụ"})}),e.jsx("th",{className:"border-bottom-0",children:e.jsx("h6",{className:"fw-semibold mb-0",children:"Trạng thái"})}),e.jsx("th",{className:"border-bottom-0 text-center",children:e.jsx("h6",{className:"fw-semibold mb-0",children:"Chi tiết"})})]})}),e.jsx("tbody",{children:o.map(c=>{var p;return e.jsxs("tr",{children:[e.jsxs("td",{className:"border-bottom-0",children:[e.jsx("h6",{className:"fw-semibold mb-1",children:c==null?void 0:c.dateBooking}),e.jsx("span",{className:"fw-normal",children:c==null?void 0:c.timeBooking})]}),e.jsx("td",{className:"border-bottom-0",children:e.jsx("h6",{className:"fw-semibold mb-0",children:(p=c==null?void 0:c.eyeCategory)==null?void 0:p.nameCategory})}),e.jsx("td",{className:"border-bottom-0",children:e.jsx("div",{className:"d-flex align-items-center gap-2",children:e.jsx("span",{className:"badge rounded-3 fw-semibold",style:{backgroundColor:v[c==null?void 0:c.status]},children:c==null?void 0:c.status})})}),(c==null?void 0:c.status)==="COMPLETED"?e.jsx("td",{className:"border-bottom-0",children:e.jsx("div",{className:"d-flex align-items-center justify-content-center",children:e.jsx("button",{className:"btn btn-outline-info d-flex align-items-center justify-content-center",style:{width:"36px",height:"36px"},onClick:()=>m(c),children:e.jsx("i",{className:"ti ti-list",style:{fontSize:"18px"}})})})}):e.jsx("td",{className:"border-bottom-0"})]},c.id)})})]})})})})]})})}),e.jsx(u.Footer,{children:e.jsx(I,{onClick:n,className:"me-4",children:"Close"})}),e.jsx(R,{showModal:s,closeModal:C,booking:j})]})})},W=q;function se({patientList:d}){const[n,t]=r.useState(!1),[s,i]=r.useState([]),[a,h]=r.useState(null),[x,b]=r.useState(1),[o,N]=r.useState(!0);let j=5;const l=r.useMemo(()=>{const m=(x-1)*j,v=m+j;return s.sort((w,g)=>w.fullName.localeCompare(g.fullName)).slice(m,v)},[x,s]),f=async()=>{const m=await M.getAllCustomers();i(m),N(!1)};r.useEffect(()=>{f()},[]),r.useEffect(()=>{i(d)},[d]);const y=m=>{h(m)},C=()=>{t(!1),h(null)};return r.useEffect(()=>{a&&t(!0)},[a]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container-fluid",children:[e.jsx("div",{children:e.jsx("div",{className:"d-flex align-items-center justify-content-between",children:e.jsx("h5",{className:"card-title fw-semibold mb-4",children:"Danh sách bệnh nhân"})})}),o?e.jsx("span",{className:"loader"}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"col-lg-12 d-flex align-items-around",style:{padding:0},children:e.jsxs("div",{className:"card w-100",children:[e.jsxs("div",{className:"d-flex ps-4 pt-4",children:[e.jsx("span",{className:"h5 fw-semibold",children:s.length}),e.jsx("p",{className:"ms-1 fw-normal",children:"bệnh nhân"})]}),e.jsx("div",{className:"card-body p-4",children:e.jsx("div",{className:"table-responsive",children:s.length?e.jsxs("table",{className:"table text-nowrap mb-0 align-middle",children:[e.jsx("thead",{className:"text-dark fs-4",children:e.jsxs("tr",{className:"text-center",children:[e.jsx("th",{className:"border-bottom-0",children:e.jsx("h6",{className:"fw-semibold mb-0",children:"STT"})}),e.jsx("th",{className:"border-bottom-0",children:e.jsx("h6",{className:"fw-semibold mb-0",children:"Họ và tên"})}),e.jsx("th",{className:"border-bottom-0",children:e.jsx("h6",{className:"fw-semibold mb-0",children:"SĐT"})}),e.jsx("th",{className:"border-bottom-0",children:e.jsx("h6",{className:"fw-semibold mb-0",children:"Năm sinh"})}),e.jsx("th",{className:"border-bottom-0 text-center",children:e.jsx("h6",{className:"fw-semibold mb-0",children:"Chi tiết"})})]})}),e.jsx("tbody",{children:l.map((m,v)=>{const w=v+1;return e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{className:"border-bottom-0",children:e.jsx("h6",{className:"fw-semibold mb-0",children:w})}),e.jsx("td",{className:"border-bottom-0",children:e.jsx("span",{className:"fw-normal",children:m==null?void 0:m.fullName})}),e.jsx("td",{className:"border-bottom-0",children:e.jsx("p",{className:"mb-0 fw-normal",children:m==null?void 0:m.phoneNumber})}),e.jsx("td",{className:"border-bottom-0",children:e.jsx("div",{className:"d-flex align-items-center justify-content-center gap-2",children:e.jsx("span",{className:"badge bg-primary rounded-3 fw-semibold",children:m.age})})}),e.jsx("td",{className:"border-bottom-0",children:e.jsx("div",{className:"d-flex align-items-center justify-content-center",children:e.jsx("button",{className:"btn btn-outline-success d-flex align-items-center justify-content-center",style:{width:"36px",height:"36px"},onClick:()=>y(m.id),children:e.jsx("i",{className:"ti ti-report-medical",style:{fontSize:"18px"}})})})})]},m.id)})})]}):e.jsx("div",{children:e.jsx("p",{children:"Danh sách đang trống"})})})})]})}),e.jsx("div",{className:"pagination-container",style:{margin:0,display:"flex",justifyContent:"flex-end"},children:e.jsx(V,{className:"pagination-bar",currentPage:x,totalCount:s.length,pageSize:j,onPageChange:m=>b(m)})})]})]}),e.jsx(W,{showModal:n,closeModal:C,idCustomer:a})]})}export{se as default};
